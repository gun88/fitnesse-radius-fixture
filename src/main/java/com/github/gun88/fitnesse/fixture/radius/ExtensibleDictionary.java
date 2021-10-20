package com.github.gun88.fitnesse.fixture.radius;

import org.tinyradius.dictionary.AttributeType;
import org.tinyradius.dictionary.Dictionary;

import java.io.IOException;

public class ExtensibleDictionary implements Dictionary {

    private final Dictionary baseDictionary;
    private final Dictionary extendedDictionary;

    private ExtensibleDictionary(Dictionary baseDictionary, Dictionary extendedDictionary) {
        this.baseDictionary = baseDictionary;
        this.extendedDictionary = extendedDictionary;
    }

    static ExtensibleDictionary build(Dictionary baseDictionary, String dictionaryString) throws IOException {
        Dictionary extendedDictionary = RadiusFixtureUtil.parseDictionary(dictionaryString);
        return new ExtensibleDictionary(baseDictionary, extendedDictionary);
    }

    @Override
    public AttributeType getAttributeTypeByName(String s) {
        AttributeType attributeType = extendedDictionary.getAttributeTypeByName(s);
        if (attributeType == null)
            attributeType = baseDictionary.getAttributeTypeByName(s);
        return attributeType;
    }

    @Override
    public AttributeType getAttributeTypeByCode(int i) {
        AttributeType attributeType = extendedDictionary.getAttributeTypeByCode(i);
        if (attributeType == null)
            attributeType = baseDictionary.getAttributeTypeByCode(i);
        return attributeType;
    }

    @Override
    public AttributeType getAttributeTypeByCode(int i, int i1) {
        AttributeType attributeType = extendedDictionary.getAttributeTypeByCode(i, i1);
        if (attributeType == null)
            attributeType = baseDictionary.getAttributeTypeByCode(i, i1);
        return attributeType;
    }

    @Override
    public String getVendorName(int i) {
        String vendorName = extendedDictionary.getVendorName(i);
        if (vendorName == null)
            vendorName = baseDictionary.getVendorName(i);
        return vendorName;
    }

    @Override
    public int getVendorId(String s) {
        int vendorId = extendedDictionary.getVendorId(s);
        if (vendorId == -1)
            vendorId = baseDictionary.getVendorId(s);
        return vendorId;
    }
}
