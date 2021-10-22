package com.github.gun88.fitnesse.fixture.radius;

import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class RadiusClientFixtureTest {

    private static final String DICTIONARY = "" +
            "ATTRIBUTE   Custom-String       201     string                          \n" +
            "ATTRIBUTE   Custom-Octets       202     octets                          \n" +
            "ATTRIBUTE   Custom-Integer      203     integer                         \n" +
            "ATTRIBUTE   Custom-Date         204     date                            \n" +
            "ATTRIBUTE   Custom-Ipaddr       205     ipaddr                          \n" +
            "ATTRIBUTE   Custom-Ipv6addr     206     ipv6addr                        \n" +
            "ATTRIBUTE   Custom-Ipv6prefix   207     ipv6prefix                      \n" +
            "                                                                        \n" +
            "# Wi-Fi Alliance - Wireless ISP Roaming - Best Current Practices v1,    \n" +
            "# Feb 2003, p 14                                                        \n" +
            "# http://www.weca.net/OpenSection/downloads/WISPr_V1.0.pdf              \n" +
            "                                                                        \n" +
            "# https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers\n" +
            "                                                                        \n" +
            "VENDOR          3000    CustomVendor                                     \n" +
            "                                                                        \n" +
            "VENDORATTR      3000    Custom-Vendor-String    1   string              \n" +
            "VENDORATTR      3000    Custom-Vendor-Integer   2   integer             \n" +
            "";
    private final RadiusClientFixture fixture = new RadiusClientFixture();


    @Test
    public void shouldAcceptValues_whenAttributeIsInExtendedDictionary() throws IOException {
        fixture.extendDictionary(DICTIONARY);
        fixture.addRequestAttributeWithValue("Custom-String", "foo-bar");
        fixture.addRequestAttributeWithValue("Custom-Octets", "0x0012");
        fixture.addRequestAttributeWithValue("Custom-Integer", "1234567");
        fixture.addRequestAttributeWithValue("Custom-Date", "9999999");
        fixture.addRequestAttributeWithValue("Custom-Ipaddr", "1.2.3.4");
        fixture.addRequestAttributeWithValue("Custom-Ipv6addr", "1:0:0:0:0:0:0:1");
        fixture.addRequestAttributeWithValue("Custom-Ipv6prefix", "1:0:0:0:0:0:0:0/16");
        fixture.addRequestAttributeWithValue("Custom-Vendor-String", "zoo-bar");
        fixture.addRequestAttributeWithValue("Custom-Vendor-Integer", "888888");

        assertEquals("<pre>Unknown (0), ID 0\n" +
                        "Custom-String: foo-bar\n" +
                        "Custom-Octets: 0x0012\n" +
                        "Custom-Integer: 1234567\n" +
                        "Custom-Date: 9999999\n" +
                        "Custom-Ipaddr: 1.2.3.4\n" +
                        "Custom-Ipv6addr: 1:0:0:0:0:0:0:1\n" +
                        "Custom-Ipv6prefix: 1:0:0:0:0:0:0:0/16\n" +
                        "Vendor-Specific: vendor ID 3000\n" +
                        "  Custom-Vendor-String: zoo-bar\n" +
                        "Vendor-Specific: vendor ID 3000\n" +
                        "  Custom-Vendor-Integer: 888888</pre>",
                fixture.request());
    }

    @Test(expected = NullPointerException.class)
    public void shouldThrowException_whenUnknownAttributeProvided() {
        fixture.addRequestAttributeWithValue("Npm-Service-Id", "foo-bar");
    }

}
