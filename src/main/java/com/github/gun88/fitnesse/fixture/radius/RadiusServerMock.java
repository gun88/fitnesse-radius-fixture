package com.github.gun88.fitnesse.fixture.radius;

import org.tinyradius.attribute.RadiusAttribute;
import org.tinyradius.packet.AccessRequest;
import org.tinyradius.packet.AccountingRequest;
import org.tinyradius.packet.RadiusPacket;
import org.tinyradius.util.RadiusException;
import org.tinyradius.util.RadiusServer;
import org.tinyradius.util.RadiusUtil;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.List;

public class RadiusServerMock {

    private static RadiusServer radiusServer;

    private int acctPort = 2888;
    private int authPort = 2889;
    private String sharedSecret = "password";
    private List<RadiusUser> radiusUsers = new ArrayList<>();
    private int duplicateInterval = 1;
    private boolean listenAuth = true;
    private boolean listenAcct = true;

    private static void copyAccessRequestData(RadiusPacket radiusPacket, AccessRequest request) {
        request.setAttributes(radiusPacket.getAttributes());
        request.setPacketIdentifier(radiusPacket.getPacketIdentifier());
        request.setAuthenticator(radiusPacket.getAuthenticator());
        request.setDictionary(radiusPacket.getDictionary());
        request.setPacketType(radiusPacket.getPacketType());
    }

    private static String extractUserName(RadiusPacket radiusPacket) {
        RadiusAttribute attribute = radiusPacket.getAttribute("User-Name");
        if (attribute == null)
            return null;
        return attribute.getAttributeValue();
    }

    private static String extractPassword(RadiusPacket radiusPacket) {
        RadiusAttribute attribute = radiusPacket.getAttribute("User-Password");
        if (attribute == null)
            return null;
        return RadiusUtil.getStringFromUtf8(attribute.getAttributeData());
    }

    public String startServer() {
        if (radiusServer == null) {
            radiusServer = new CustomRadiusServer();
            radiusServer.setAcctPort(acctPort);
            radiusServer.setAuthPort(authPort);
            radiusServer.setAuthPort(authPort);
            radiusServer.setDuplicateInterval(duplicateInterval);
            radiusServer.start(listenAuth, listenAcct);

            return "Server started";
        }
        return "Server Already Running";
    }

    public String stopServer() {
        if (radiusServer != null) {
            radiusServer.stop();

            return "Server stopped";
        }
        return "Server Already Stopped";
    }

    public void acctPort(int acctPort) {
        this.acctPort = acctPort;
    }

    public void authPort(int authPort) {
        this.authPort = authPort;
    }

    public void sharedSecret(String sharedSecret) {
        this.sharedSecret = sharedSecret;
    }

    public void addUserWithPasswordAndRole(String userName, String password, String role) {
        this.radiusUsers.add(new RadiusUser(userName, password, role));
    }

    public void duplicateInterval(int duplicateInterval) {
        this.duplicateInterval = duplicateInterval;
    }

    public void listenAuth(boolean listenAuth) {
        this.listenAuth = listenAuth;
    }

    public void listenAcct(boolean listenAcct) {
        this.listenAcct = listenAcct;
    }

    private RadiusUser findRadiusUser(String userName) {
        return radiusUsers.stream()
                .filter(u -> u.username.equals(userName))
                .findFirst()
                .orElseGet(RadiusUser::empty);
    }

    private static class RadiusUser {
        private final String username;
        private final String password;
        private final String role;

        private RadiusUser(String username, String password, String role) {
            this.username = username;
            this.password = password;
            this.role = role;
        }

        private static RadiusUser empty() {
            return new RadiusUser("#", "#", "#");
        }

    }

    private static class AnonAccessRequest extends AccessRequest {
        static AnonAccessRequest from(RadiusPacket radiusPacket) {
            AnonAccessRequest request = new AnonAccessRequest();
            copyAccessRequestData(radiusPacket, request);
            return request;
        }

        @Override
        public boolean verifyPassword(String plaintext) {
            return true;
        }
    }

    private static class PlainPasswordAccessRequest extends AccessRequest {
        static PlainPasswordAccessRequest from(RadiusPacket radiusPacket) {
            PlainPasswordAccessRequest request = new PlainPasswordAccessRequest();
            copyAccessRequestData(radiusPacket, request);
            String password = extractPassword(radiusPacket);
            if (password != null)
                request.setUserPassword(password);
            return request;
        }

    }

    private class CustomRadiusServer extends RadiusServer {

        @Override
        public String getSharedSecret(InetSocketAddress client) {
            return sharedSecret;
        }

        @Override
        public String getUserPassword(String userName) {
            return findRadiusUser(userName).password;
        }

        private String getUserRole(String userName) {
            return findRadiusUser(userName).role;
        }

        @Override
        protected RadiusPacket makeRadiusPacket(DatagramPacket packet, String sharedSecret, int forceType) throws IOException, RadiusException {
            try {
                return super.makeRadiusPacket(packet, sharedSecret, forceType);
            } catch (RadiusException e) {
                if (e.getMessage().equals("Access-Request: User-Password or CHAP-Password/CHAP-Challenge missing")) {
                    RadiusPacket radiusPacket = super.makeRadiusPacket(packet, "...", RadiusPacket.RESERVED);
                    if (isAnonRole(radiusPacket)) {
                        return AnonAccessRequest.from(radiusPacket);
                    }
                }
                if (e.getMessage().equals("malformed User-Password attribute")) {
                    RadiusPacket radiusPacket = super.makeRadiusPacket(packet, "...", RadiusPacket.RESERVED);
                    return PlainPasswordAccessRequest.from(radiusPacket);
                }
                throw e;
            }
        }

        @Override
        public RadiusPacket accessRequestReceived(AccessRequest accessRequest, InetSocketAddress client) throws RadiusException {
            RadiusPacket response = super.accessRequestReceived(accessRequest, client);
            RadiusUser radiusUser = findRadiusUser(accessRequest.getUserName());

            String attribute = accessRequest.getAttributeValue("Callback-Id");
            if ("dump-framed-protocol".equalsIgnoreCase(attribute)) {
                response.addAttribute("Reply-Message", "Framed-Protocol: " + accessRequest.getAttributeValue("Framed-Protocol"));
            }
            if ("simple-reply".equalsIgnoreCase(attribute)) {
                response.addAttribute("Reply-Message", "user: '" + radiusUser.username + "' and role: '" + radiusUser.role + "'");
            }
            if ("multi-reply".equalsIgnoreCase(attribute)) {
                response.addAttribute("Reply-Message", "user: '" + radiusUser.username + "'");
                response.addAttribute("Reply-Message", "role: '" + radiusUser.role + "'");
            }
            return response;
        }

        @Override
        public RadiusPacket accountingRequestReceived(AccountingRequest accountingRequest, InetSocketAddress client) throws RadiusException {
            RadiusPacket response = super.accountingRequestReceived(accountingRequest, client);
            String attribute = accountingRequest.getAttributeValue("Callback-Id");
            if ("dump-acct-status-type".equalsIgnoreCase(attribute)) {
                response.addAttribute("Reply-Message", "event: " + accountingRequest.getAttributeValue("Acct-Status-Type"));
            }
            if ("simple-reply".equalsIgnoreCase(attribute)) {
                response.addAttribute("Reply-Message", "Accounting Done!");
            }
            if ("multi-reply".equalsIgnoreCase(attribute)) {
                response.addAttribute("Reply-Message", "Accounting Done!");
                response.addAttribute("Reply-Message", "event: " + accountingRequest.getAttributeValue("Acct-Status-Type"));
            }
            return response;
        }

        private boolean isAnonRole(RadiusPacket radiusPacket) {
            String username = extractUserName(radiusPacket);
            String role = getUserRole(username);
            return "anon".equalsIgnoreCase(role);
        }

    }
}
