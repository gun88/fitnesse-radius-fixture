package com.github.gun88.fitnesse.plugin.radius;

import com.github.gun88.fitnesse.fixture.radius.RadiusClientFixture;
import fitnesse.FitNesseContext;
import fitnesse.plugins.PluginException;
import fitnesse.plugins.PluginFeatureFactory;
import fitnesse.testrunner.run.TestRunFactoryRegistry;
import lombok.extern.slf4j.Slf4j;
import org.tinyradius.util.RadiusClient;

import java.io.File;
import java.io.IOException;
import java.util.ResourceBundle;

import static com.github.gun88.fitnesse.plugin.radius.RadiusClientPluginUtils.*;
import static java.util.ResourceBundle.getBundle;

@Slf4j
public class RadiusClientPlugin implements PluginFeatureFactory {

    private static final String BUNDLE_NAME = "radius-fixture-internal";
    private static final String ARTIFACT_ID_KEY = "artifactId";
    private static final String VERSION_KEY = "version";
    private static final String MAIN_WIKI_FILE = "RadiusFixture.wiki";

    static File clientCodeSourceLocation = getCodeSourceLocation(RadiusClientFixture.class);
    static FitNesseContext context;

    public static String getProperty(String key) {
        if (context != null && context.getProperties() != null)
            return context.getProperty(key);
        return System.getProperty(key);

    }

    public static void main(String... args) throws IOException {
        if (args.length != 1)
            throw new RuntimeException("Expected 1 argument: FitNesseRoot path");

        if (RadiusClientPluginUtils.isJar(clientCodeSourceLocation)) {
            if (updateFiles(args[0])) {
                String tinyRadiusVersion = getBundle(BUNDLE_NAME).getString("tinyRadius.version");
                String tinyRadiusJarPath = new File(clientCodeSourceLocation.getParentFile(), ("tinyradius-" + tinyRadiusVersion + ".jar")).getAbsolutePath();
                replaceInFile(args[0], MAIN_WIKI_FILE, "tinyRadius.jar.path", tinyRadiusJarPath);
                replaceInFile(args[0], MAIN_WIKI_FILE, "radiusFixture.jar.path", clientCodeSourceLocation.getAbsolutePath());
            }
        } else {
            log.info("Update disabled in classes mode");
        }

    }

    private static boolean updateFiles(String rootPagePath) throws IOException {
        ResourceBundle bundle = getBundle(BUNDLE_NAME);
        File codeSourceLocation = clientCodeSourceLocation;
        return RadiusClientUpdater.builder()
                .artifactId(bundle.getString(ARTIFACT_ID_KEY))
                .version(bundle.getString(VERSION_KEY))
                .rootPagePath(rootPagePath)
                .codeSourceLocation(codeSourceLocation)
                .classLoader(RadiusClientFixture.class.getClassLoader())
                .mainWikiFile(MAIN_WIKI_FILE)
                .build()
                .updateFiles();
    }

    @Override
    public void registerTestRunFactories(TestRunFactoryRegistry registry) throws PluginException {
        if (isPluginUserGuideExtractorAvailableInClasspath())
            return;
        try {
            context = registry.getContext();
            if (!isOmittingUpdates(context)) {
                updateFiles(context.getRootPagePath());
            }
            if (RadiusClientPluginUtils.isJar(clientCodeSourceLocation)) {
                String tinyRadiusVersion = getBundle(BUNDLE_NAME).getString("tinyRadius.version");
                String tinyRadiusJarPath = new File(clientCodeSourceLocation.getParentFile(), ("tinyradius-mod-" + tinyRadiusVersion + ".jar")).getAbsolutePath();
                context.getProperties().setProperty("tinyRadius.jar.path", tinyRadiusJarPath);
                context.getProperties().setProperty("radiusFixture.jar.path", clientCodeSourceLocation.getAbsolutePath());
            } else {
                context.getProperties().setProperty("tinyRadius.jar.path", getCodeSourceLocation(RadiusClient.class).getPath());
                context.getProperties().setProperty("radiusFixture.jar.path", getCodeSourceLocation(RadiusClientFixture.class).getPath());
            }

        } catch (Exception e) {
            throw new PluginException("RadiusClientPluginException", e);
        }
    }

    private boolean isPluginUserGuideExtractorAvailableInClasspath() {

        try {
            Class.forName("com.github.gun88.fitnesse.plugin.uge.UserGuideExtractor");
            return true;
        } catch (ClassNotFoundException e) {
            return false;
        }
    }

}
