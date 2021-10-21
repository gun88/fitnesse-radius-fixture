package com.github.gun88.fitnesse.fixture.radius;

import fitnesse.html.HtmlUtil;
import org.tinyradius.attribute.RadiusAttribute;
import org.tinyradius.dictionary.AttributeType;
import org.tinyradius.dictionary.Dictionary;
import org.tinyradius.dictionary.DictionaryParser;
import org.tinyradius.packet.AccountingRequest;
import org.tinyradius.packet.RadiusPacket;
import org.tinyradius.util.RadiusUtil;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static fitnesse.html.HtmlUtil.unescapeHTML;
import static java.util.regex.Pattern.DOTALL;
import static java.util.regex.Pattern.compile;
import static org.apache.commons.lang3.StringUtils.stripToNull;
import static org.tinyradius.packet.RadiusPacket.ACCESS_REQUEST;
import static org.tinyradius.packet.RadiusPacket.ACCOUNTING_REQUEST;

class RadiusFixtureUtil {
    private static final Pattern PRE_FORMATTED_PATTERN = compile("<pre>\\s*(.*?)\\s*</pre>", DOTALL);

    private static final List<String> AUTHENTICATION_LABELS = Arrays.asList("AUTH", "AUTHENTICATION", "ACCESS");
    private static final List<String> ACCOUNTING_LABELS = Arrays.asList("ACCT", "ACCOUNTING");

    static Dictionary parseDictionary(String dictionaryString) throws IOException {
        InputStream inputStream = new ByteArrayInputStream(stripPreFormatted(dictionaryString).getBytes());
        return DictionaryParser.parseDictionary(inputStream);
    }

    static byte[] getBytesFromHexString(String value) {
        return value.toLowerCase().startsWith("0x") ? decodeHex(value.substring(2)) : RadiusUtil.getUtf8Bytes(value);
    }

    @SuppressWarnings("unchecked")
    static List<RadiusAttribute> extractRadiusAttributes(RadiusPacket response, String type) {
        AttributeType attributeType = response.getDictionary().getAttributeTypeByName(type);
        int typeCode = attributeType.getTypeCode();
        return attributeType.getVendorId() == -1 ? response.getAttributes(typeCode) : response.getAttributes(attributeType.getVendorId(), typeCode);
    }

    static String extractAttributeFromPacket(RadiusPacket request, String attributeName) {
        return stripToNull(extractRadiusAttributes(request, attributeName).stream()
                .map(RadiusAttribute::getAttributeValue)
                .collect(Collectors.joining(", ")));
    }

    static AccountingRequest toAccountingRequest(RadiusPacket radiusPacket) {
        AccountingRequest accountingRequest = new AccountingRequest();
        accountingRequest.setAttributes(radiusPacket.getAttributes());
        accountingRequest.setPacketIdentifier(radiusPacket.getPacketIdentifier());
        accountingRequest.setAuthenticator(radiusPacket.getAuthenticator());
        accountingRequest.setDictionary(radiusPacket.getDictionary());
        accountingRequest.setPacketType(radiusPacket.getPacketType());
        return accountingRequest;
    }

    static int packetTypeToId(String packetType) {
        if (AUTHENTICATION_LABELS.contains(packetType.toUpperCase())) return ACCESS_REQUEST;
        if (ACCOUNTING_LABELS.contains(packetType.toUpperCase())) return ACCOUNTING_REQUEST;
        return Integer.parseInt(packetType);
    }

    static int retrieveArrayNotationIndex(String key) {
        return Integer.parseInt(key.split("[\\[\\]]")[1].trim());
    }

    static boolean isArrayNotation(String key) {
        return key.matches(".+\\[\\d+]");
    }

    static String removeArrayNotation(String key) {
        return key.split("\\[")[0].trim();
    }

    static boolean isArrayPushNotation(String key) {
        return key.endsWith("[]");
    }


    static String stripPreFormatted(String value) {
        String result = value;
        if (value != null) {
            Matcher matcher = PRE_FORMATTED_PATTERN.matcher(value);
            if (matcher.matches()) {
                String escapedBody = matcher.group(1);
                result = unescapeHTML(escapedBody);
            }
        }
        return result;
    }

    static String wrapPreFormatted(String response) {
        return "<pre>" + HtmlUtil.escapeHTML(response) + "</pre>";
    }

    public static byte[] decodeHex(String string) {
        char[] data = string.toCharArray();
        byte[] out = new byte[data.length >> 1];
        int len = data.length;
        if ((len & 1) != 0) {
            throw new RuntimeException("Decoder - Odd number of characters.");
        } else {
            int outLen = len >> 1;
            if (out.length < outLen) {
                throw new RuntimeException("Decoder - Output array is not large enough to accommodate decoded data.");
            } else {
                int i = 0;

                for (int j = 0; j < len; ++i) {
                    int f = toDigit(data[j], j) << 4;
                    ++j;
                    f |= toDigit(data[j], j);
                    ++j;
                    out[i] = (byte) (f & 255);
                }

            }
        }
        return out;
    }

    private static int toDigit(char ch, int index) {
        int digit = Character.digit(ch, 16);
        if (digit == -1)
            throw new RuntimeException("Decoder - Illegal hexadecimal character " + ch + " at index " + index);
        return digit;
    }
}
