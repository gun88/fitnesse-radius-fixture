package com.github.gun88.fitnesse.fixture.radius;

import org.tinyradius.packet.AccessRequest;
import org.tinyradius.packet.AccountingRequest;
import org.tinyradius.packet.RadiusPacket;
import org.tinyradius.util.RadiusException;
import org.tinyradius.util.RadiusServer;

import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Map;

public class RadiusServerMock {

    private static RadiusServer radiusServer;

    private int acctPort = 2888;
    private int authPort = 2889;
    private String sharedSecret = "password";
    private Map<String, String> userMap = new HashMap<>();
    private int duplicateInterval = 1;
    private boolean listenAuth = true;
    private boolean listenAcct = true;

    public String startServer() {
        if (radiusServer == null) {
            radiusServer = new MyRadiusServer();
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

    public void addUserWithPassword(String userName, String password) {
        this.userMap.put(userName, password);
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

    private class MyRadiusServer extends RadiusServer {

        @Override
        public String getSharedSecret(InetSocketAddress client) {
            return sharedSecret;
        }

        @Override
        public String getUserPassword(String userName) {
            return userMap.get(userName);
        }


        @Override
        public RadiusPacket accessRequestReceived(AccessRequest accessRequest, InetSocketAddress client) throws RadiusException {
            RadiusPacket response = super.accessRequestReceived(accessRequest, client);
            /*if (response == null) {

            } else if (response.getPacketType() == 2) {
                response.addAttribute("Reply-Message", "Welcome " + accessRequest.getUserName() + "!");
            } else {
            }*/

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
    }
}
