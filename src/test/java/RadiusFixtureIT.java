import fitnesse.junit.FitNesseRunner;
import lombok.extern.slf4j.Slf4j;
import org.junit.runner.RunWith;

import static fitnesse.junit.FitNesseRunner.*;

@Slf4j
@RunWith(FitNesseRunner.class)
@FitnesseDir("src/main/resources/Resources")
@OutputDir("target/reports/fitnesse-results")
@Suite("PlugIns.RadiusFixture.UserGuide")
public class RadiusFixtureIT {


}
