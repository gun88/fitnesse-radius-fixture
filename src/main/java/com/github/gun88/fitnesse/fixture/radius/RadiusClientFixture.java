package com.github.gun88.fitnesse.fixture.radius;

import lombok.SneakyThrows;
import lombok.extern.java.Log;
import org.tinyradius.attribute.RadiusAttribute;
import org.tinyradius.dictionary.AttributeType;
import org.tinyradius.packet.AccessRequest;
import org.tinyradius.packet.AccountingRequest;
import org.tinyradius.packet.RadiusPacket;
import org.tinyradius.util.RadiusClient;
import org.tinyradius.util.RadiusException;

import java.io.IOException;
import java.net.SocketException;
import java.util.Map;

import static com.github.gun88.fitnesse.fixture.radius.RadiusFixtureUtil.*;
import static org.tinyradius.packet.RadiusPacket.ACCESS_REQUEST;
import static org.tinyradius.packet.RadiusPacket.ACCOUNTING_REQUEST;

@Log
public class RadiusClientFixture {

    private final RadiusClient radiusClient = new RadiusClient("127.0.0.1", "sharedSecret");
    private final RadiusPacket request = new RadiusPacket();
    private RadiusPacket response;
    private String nullLabel = "null";
    private String authProtocol;
    private String authUserPassword;
    private int genericPort = 1813;

    public RadiusClientFixture() {
    }

    public RadiusClientFixture(String host, int port, String sharedSecret) {
        setHost(host);
        setGenericPort(port);
        setAcctPort(port);
        setAuthPort(port);
        setSharedSecret(sharedSecret);
    }

    public RadiusClientFixture(Map<String, String> map) {
        map.forEach(this::set);
    }

    public void setHost(String hostName) {
        radiusClient.setHostName(hostName);
    }

    public void setMaxRetry(int retryCount) {
        radiusClient.setRetryCount(retryCount);
    }

    public void setSharedSecret(String sharedSecret) {
        radiusClient.setSharedSecret(sharedSecret);
    }

    public void setSocketTimeout(int socketTimeout) {
        try {
            radiusClient.setSocketTimeout(socketTimeout);
        } catch (SocketException e) {
            log.warning("Can not set socket timeout: " + e.getMessage());
        }
    }

    public void setAcctPort(int acctPort) {
        radiusClient.setAcctPort(acctPort);
    }

    public void setAuthPort(int authPort) {
        radiusClient.setAuthPort(authPort);
    }

    public void setGenericPort(int genericPort) {
        this.genericPort = genericPort;
    }

    public void setNullLabel(String nullLabel) {
        this.nullLabel = nullLabel;
    }

    public void extendDictionary(String dictionaryString) throws IOException {
        request.setDictionary(ExtensibleDictionary.build(request.getDictionary(), dictionaryString));
    }

    public void setRequestId(int packetIdentifier) {
        request.setPacketIdentifier(packetIdentifier);
    }

    public void setPacketType(String packetType) {
        request.setPacketType(packetTypeToId(packetType));
    }

    public void setRequestAuthenticator(String authenticator) {
        request.setAuthenticator(getBytesFromHexString(authenticator));
    }

    public void setAuthPapPassword(String password) {
        this.authUserPassword = password;
        this.authProtocol = "pap";
    }

    public void setAuthChapPassword(String password) {
        this.authUserPassword = password;
        this.authProtocol = "chap";
    }

    public void setRequestAttributeWithValue(String typeName, String value) {
        removeRequestAttribute(typeName);
        addRequestAttributeWithValue(typeName, value);
    }

    public void addRequestAttributeWithValue(String typeName, String value) {
        if (nullLabel.equalsIgnoreCase(value.trim()))
            return;
        try {
            request.addAttribute(typeName, value);
        } catch (Exception e) {
            request.addAttribute(new RadiusAttribute(request.getDictionary().getAttributeTypeByName(typeName).getTypeCode(), getBytesFromHexString(value)));
        }
    }

    public void removeRequestAttribute(String typeName) {
        AttributeType attributeType = request.getDictionary().getAttributeTypeByName(typeName);
        request.removeAttributes(attributeType.getVendorId(), attributeType.getTypeCode());
    }

    public void clearRequestAttributes() {
        request.getAttributes().clear();
    }

    public String sendAuthentication() throws IOException, RadiusException {
        request.setPacketType(ACCESS_REQUEST);
        return sendPacket();
    }

    public String sendAccounting() throws IOException, RadiusException {
        request.setPacketType(ACCOUNTING_REQUEST);
        return sendPacket();
    }

    public synchronized String sendPacket() throws IOException, RadiusException {
        switch (request.getPacketType()) {
            case ACCESS_REQUEST:
                AccessRequest accessRequest = toAccessRequest(request, authUserPassword, authProtocol);
                log.fine("send Access-Request packet: " + accessRequest);
                response = radiusClient.communicate(accessRequest, radiusClient.getAuthPort());
                break;
            case ACCOUNTING_REQUEST:
                AccountingRequest accountingRequest = toAccountingRequest(request);
                log.fine("send Accounting-Request packet: " + accountingRequest);
                response = radiusClient.communicate(accountingRequest, radiusClient.getAcctPort());
                break;
            default:
                log.fine("send Generic-Request packet: " + request);
                response = radiusClient.communicate(request, genericPort);
                break;
        }
        log.fine("received packet: " + response);

        return response.getPacketTypeName();

    }

    public String request() {
        return wrapPreFormatted(request.toString());
    }

    public String response() {
        return wrapPreFormatted(response.toString());
    }

    public int responseId() {
        return response.getPacketIdentifier();
    }

    public String responseAttribute(String type) {
        return extractAttributeFromPacket(response, type);
    }

    public String responseAttributeAt(String type, int index) {
        return extractRadiusAttributes(response, type).get(index).getAttributeValue();
    }

    public boolean responseAttributeContains(String type, String value) {
        return extractRadiusAttributes(response, type).stream()
                .map(RadiusAttribute::getAttributeValue)
                .anyMatch(x -> x.equals(value));
    }

    @SneakyThrows
    public void set(String key, String value) {
        String normalizedKey = key.replaceAll("[^\\w]", "");

        if (normalizedKey.equalsIgnoreCase("Host")) setHost(value);
        else if (normalizedKey.equalsIgnoreCase("SocketTimeout")) setSocketTimeout(Integer.parseInt(value));
        else if (normalizedKey.equalsIgnoreCase("AcctPort")) setAcctPort(Integer.parseInt(value));
        else if (normalizedKey.equalsIgnoreCase("AuthPort")) setAuthPort(Integer.parseInt(value));
        else if (normalizedKey.equalsIgnoreCase("GenericPort")) setGenericPort(Integer.parseInt(value));
        else if (normalizedKey.equalsIgnoreCase("SharedSecret")) setSharedSecret(value);
        else if (normalizedKey.equalsIgnoreCase("NullLabel")) setNullLabel(value);
        else if (normalizedKey.equalsIgnoreCase("MaxRetry")) setMaxRetry(Integer.parseInt(value));
        else if (normalizedKey.equalsIgnoreCase("RequestId")) setRequestId(Integer.parseInt(value));
        else if (normalizedKey.equalsIgnoreCase("RequestAuthenticator")) setRequestAuthenticator(value);
        else if (normalizedKey.equalsIgnoreCase("PacketType")) setPacketType(value);
        else if (normalizedKey.equalsIgnoreCase("Dictionary")) extendDictionary(value);
        else if (normalizedKey.equalsIgnoreCase("AuthPapPassword")) setAuthPapPassword(value);
        else if (normalizedKey.equalsIgnoreCase("AuthChapPassword")) setAuthChapPassword(value);
        else if (isArrayPushNotation(key)) addRequestAttributeWithValue(removeArrayNotation(key), value);
        else setRequestAttributeWithValue(key, value);


    }

    public Object get(String key) {
        String normalizedKey = key.replaceAll("[^\\w]", "");

        if (normalizedKey.equalsIgnoreCase("Request")) return request();
        if (normalizedKey.equalsIgnoreCase("Response")) return response();
        if (normalizedKey.equalsIgnoreCase("ResponseId")) return responseId();
        if (normalizedKey.equalsIgnoreCase("PacketTypeName")) return response.getPacketTypeName();
        if (isArrayNotation(key)) return responseAttributeAt(removeArrayNotation(key), retrieveArrayNotationIndex(key));
        return responseAttribute(key);
    }

    public void execute() throws IOException, RadiusException {
        sendPacket();
    }
}
