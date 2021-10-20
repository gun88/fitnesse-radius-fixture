package com.github.gun88.fitnesse.plugin.radius;

import com.github.gun88.fitnesse.fixture.radius.RadiusClientFixture;
import fitnesse.ConfigurationParameter;
import fitnesse.FitNesseContext;
import fitnesse.plugins.PluginException;
import fitnesse.testrunner.run.TestRunFactoryRegistry;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import org.tinyradius.util.RadiusClient;
import util.WikiFileUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.Properties;

import static com.github.gun88.fitnesse.plugin.radius.RadiusClientPluginUtils.getCodeSourceLocation;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class RadiusClientPluginTest {

    @Rule
    public TemporaryFolder temporaryFolder = new TemporaryFolder();

    @Test
    public void getProperty_shouldUseSystemProperties_whenRegisterTestRunFactoriesNotCalled() {
        RadiusClientPlugin.context = null;
        System.setProperty("my-prop", "123");
        String property = RadiusClientPlugin.getProperty("my-prop");
        Assert.assertEquals("123", property);
        System.clearProperty("my-prop");
    }

    @Test
    public void getProperty_shouldUseContextProperties_whenRegisterTestRunFactoriesNotCalled() throws PluginException, IOException {
        RadiusClientPlugin.context = null;
        System.setProperty("my-prop", "000");
        RadiusClientPlugin plugin = new RadiusClientPlugin();
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getProperty("my-prop")).thenReturn("456");
        File wiki = temporaryFolder.newFolder("wiki");
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        when(context.getProperty(ConfigurationParameter.OMITTING_UPDATES.getKey())).thenReturn("true");
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        plugin.registerTestRunFactories(new TestRunFactoryRegistry(context));
        String property = RadiusClientPlugin.getProperty("my-prop");
        Assert.assertEquals("456", property);
        System.clearProperty("my-prop");
    }

    @Test(expected = RuntimeException.class)
    public void main_shouldThrowException_whenNoPathProvided() throws IOException {
        RadiusClientPlugin.main();
    }

    @Test
    public void main_shouldNotUpdate_whenNoJarDetected() throws IOException {
        File folder = temporaryFolder.newFolder("wiki");
        RadiusClientPlugin.main(folder.getPath());
        assertEquals(0, Files.list(folder.toPath()).count());
    }

    @Test
    public void main_shouldNotUpdate_whenSameVersionDetected() throws IOException {
        File wiki = temporaryFolder.newFolder("wiki");
        temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/RadiusFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.0"));
        File lib = temporaryFolder.newFolder("lib");
        RadiusClientPlugin.clientCodeSourceLocation = temporaryFolder.newFile("lib/fixture.jar");
        RadiusClientPlugin.main(wiki.getPath());
        assertEquals(1, Files.list(wiki.toPath()).count());
        assertEquals(1, Files.list(lib.toPath()).count());
    }

    @Test
    public void main_shouldUpdate_whenDifferentVersionDetected() throws IOException {
        File wiki = temporaryFolder.newFolder("wiki");
        File plugins = temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/RadiusFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.1"));
        File lib = temporaryFolder.newFolder("lib");
        RadiusClientPlugin.clientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");
        RadiusClientPlugin.main(wiki.getPath());

        assertEquals(2, Files.list(lib.toPath()).count());
        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "tinyradius-0.0.0.jar");
        assertTrue(Files.exists(mainFixturePath));
        assertTrue(Files.exists(dependencyPath));
        assertEquals(2, Files.list(plugins.toPath()).count());
        assertTrue(Files.exists(Paths.get(plugins.getAbsolutePath(), "RadiusFixture")));
        assertTrue(Files.isDirectory(Paths.get(plugins.getAbsolutePath(), "RadiusFixture")));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + dependencyPath.toAbsolutePath()));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + mainFixturePath.toAbsolutePath()));
    }

    @Test
    public void main_shouldUpdate_whenNoFileDetected() throws IOException {
        File wiki = temporaryFolder.newFolder("wiki");
        File lib = temporaryFolder.newFolder("lib");
        RadiusClientPlugin.clientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");
        RadiusClientPlugin.main(wiki.getPath());

        assertEquals(2, Files.list(lib.toPath()).count());
        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "tinyradius-0.0.0.jar");
        assertTrue(Files.exists(mainFixturePath));
        assertTrue(Files.exists(dependencyPath));
        File plugins = new File(temporaryFolder.getRoot(), "wiki/PlugIns");
        File mainWikiFile = new File(plugins, "RadiusFixture.wiki");
        assertEquals(2, Files.list(plugins.toPath()).count());
        assertTrue(Files.exists(Paths.get(plugins.getAbsolutePath(), "RadiusFixture")));
        assertTrue(Files.isDirectory(Paths.get(plugins.getAbsolutePath(), "RadiusFixture")));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + dependencyPath.toAbsolutePath()));
        assertTrue(WikiFileUtils.contains(mainWikiFile, "!path " + mainFixturePath.toAbsolutePath()));
    }


    @Test
    public void registerTestRunFactories_shouldNotUpdate_whenOmittingUpdateSet() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        when(context.getProperty(ConfigurationParameter.OMITTING_UPDATES.getKey())).thenReturn("true");
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new RadiusClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));
        assertEquals(0, Files.list(wiki.toPath()).count());
    }

    @Test
    public void registerTestRunFactories_shouldNotUpdate_whenSameVersionDetected() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/RadiusFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.0"));
        File lib = temporaryFolder.newFolder("lib");
        RadiusClientPlugin.clientCodeSourceLocation = temporaryFolder.newFile("lib/fixture.jar");

        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new RadiusClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        assertEquals(1, Files.list(wiki.toPath()).count());
        assertEquals(1, Files.list(lib.toPath()).count());
    }

    @Test
    public void registerTestRunFactories_shouldUpdate_whenDifferentVersionDetected() throws IOException, PluginException {

        File wiki = temporaryFolder.newFolder("wiki");
        File plugins = temporaryFolder.newFolder("wiki", "PlugIns");
        File mainWikiFile = temporaryFolder.newFile("wiki/PlugIns/RadiusFixture.wiki");
        Files.write(mainWikiFile.toPath(), Collections.singletonList("!note Release v0.0.1"));
        File lib = temporaryFolder.newFolder("lib");
        RadiusClientPlugin.clientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");

        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new RadiusClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        assertEquals(2, Files.list(lib.toPath()).count());
        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "tinyradius-0.0.0.jar");
        assertTrue(Files.exists(mainFixturePath));
        assertTrue(Files.exists(dependencyPath));
        assertEquals(2, Files.list(plugins.toPath()).count());
        assertTrue(Files.exists(Paths.get(plugins.getAbsolutePath(), "RadiusFixture")));
        assertTrue(Files.isDirectory(Paths.get(plugins.getAbsolutePath(), "RadiusFixture")));

    }

    @Test
    public void registerTestRunFactories_shouldSetClassesPath_whenNoJarDetected() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new RadiusClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        assertEquals(getCodeSourceLocation(RadiusClient.class).getPath(), properties.getProperty("tinyRadius.jar.path"));
        assertEquals(getCodeSourceLocation(RadiusClientFixture.class).getPath(), properties.getProperty("radiusFixture.jar.path"));
    }


    @Test
    public void registerTestRunFactories_shouldSetJarPath_whenJarDetected() throws IOException, PluginException {
        File wiki = temporaryFolder.newFolder("wiki");
        File lib = temporaryFolder.newFolder("lib");
        RadiusClientPlugin.clientCodeSourceLocation = temporaryFolder.newFile("lib/fixture-0.0.0.jar");
        FitNesseContext context = mock(FitNesseContext.class);
        when(context.getRootPagePath()).thenReturn(wiki.getPath());
        Properties properties = new Properties();
        when(context.getProperties()).thenReturn(properties);
        new RadiusClientPlugin().registerTestRunFactories(new TestRunFactoryRegistry(context));

        Path mainFixturePath = Paths.get(lib.getAbsolutePath(), "fixture-0.0.0.jar");
        Path dependencyPath = Paths.get(lib.getAbsolutePath(), "tinyradius-0.0.0.jar");
        assertEquals(dependencyPath.toString(), properties.getProperty("tinyRadius.jar.path"));
        assertEquals(mainFixturePath.toString(), properties.getProperty("radiusFixture.jar.path"));
    }


}
