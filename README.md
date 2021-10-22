# fitnesse-radius-fixture
FitNesse fixture for RADIUS protocol communication - [![Maven Central](https://img.shields.io/maven-central/v/com.github.gun88/fitnesse-radius-fixture.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22com.github.gun88%22%20AND%20a:%22fitnesse-radius-fixture%22)

## Table of Contents

- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Installation](#installation)
- [Running](#running)
- [Build](#build)
- [Releases](#releases)


## Quick Start
1. Download release file: [fitnesse-radius-fixture-1.0.0.jar](https://github.com/gun88/fitnesse-radius-fixture/releases/download/v1.0.0/fitnesse-radius-fixture-1.0.0.jar)
2. Put `fitnesse-radius-fixture-1.0.0.jar` in the `plugins` directory (or add it to the classpath)
3. Run FitNesse and navigate PlugIns suite to get fitnesse-radius-fixture UserGuide and Examples

*Note: As shown in [QuickStart](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide) documentation session, the plugin mode installation can be executed just placing 
the fitnesse-radius-fixture.jar in the FitNesse plugin directory or by making the jar file available 
in the FitNesse web server classpath. When the archive is available in classpath, documentation 
files and dependency libraries are automatically extracted and tuned. To know more about 
other installation methods, go to [Installation](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Installation) documentation page*


## Documentation
Documentation is automatically extracted in [plugin mode](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Installation.PluginMode) or via [auto-extraction tool](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Installation.AutoExtractionMode). Is also 
available online [here](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide).

Check documentation to know more about:
1. [Installation](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Installation)
1. [RadiusTestCreation](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.RadiusTestCreation)
    * [Authentication](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Authentication)
    * [Accounting](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Accounting)
    * [GenericPacket](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.GenericPacket)


## Installation
RadiusFixture can be installed as a plugin or just provided during test executions. The suggested 
installation mode is the [plugin mode](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Installation.PluginMode).
More details on installation modes are available [here](https://gun88.github.io/fitnesse-radius-fixture/PlugIns.RadiusFixture.UserGuide.Installation)


## Running
Once installed in your FitNesse distribution, start creating your first test. Tests can 
be developed in decision table and script table mode as shown in test creation documentation 
page. The following is a simple test example in script mode.

    |import                                  |
    |com.github.gun88.fitnesse.fixture.radius|
    
    |script               |radius client fixture                  |
    |set host             |${RADIUS_HOST}                         |
    |set acct port        |${RADIUS_ACCT_PORT}                    |
    |set shared secret    |${RADIUS_SHARED_SECRET}                |
    |set request attribute|Acct-Status-Type   |with value|Start   |
    |check                |send accounting    |Accounting-Response|
    |show                 |request                                |
    |show                 |response                               |

*Note: variables RADIUS_HOST, RADIUS_ACCT_PORT, RADIUS_SHARED_SECRET should be defined by the user.*

*Note: if RadiusFixture is not installed as a plugin, remember to set or replace 
properties: tinyRadius.jar.path, radiusFixture.jar.path; with actual paths*


## Build
The fitnesse-radius-fixture build can be executed via Maven.

Produced build will be a jar named `fitnesse-radius-fixture-x.y.z.jar`, available under `target` directory.

*Note: build version number instead of `x.y.z`*

Execute `mvn clean package` (or `mvn clean verify` to execute integration tests 
or `mvn clean install` to make `fitnesse-radius-fixture-x.y.z.jar` available in your
local repository)

WARNING: to build fitnesse-radius-fixture a dependency not available in maven repository is needed: tinyradius-1.1.0-MOD

### Install tinyradius-1.1.0-MOD dependency
Two methods are available for this installation

 1. clone the project from [here](https://github.com/gun88/TinyRadius/tree/mod) and run `mvn install`.
 2. [install as a third party jar](https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html) the [tinyradius-mod-1.1.0.jar](https://github.com/gun88/TinyRadius/releases/download/untagged-f61effa5a03824e6c8b3/tinyradius-mod-1.0.0.jar) available in [releases page](https://github.com/gun88/TinyRadius/releases)


## Releases
### v1.0.0 (fitnesse-radius-fixture)
 - [fitnesse-radius-fixture-1.0.0.jar](https://github.com/gun88/fitnesse-radius-fixture/releases/download/v1.0.0/fitnesse-radius-fixture-1.0.0.jar)
