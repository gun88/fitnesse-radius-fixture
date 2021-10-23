import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-auto-extraction-mode',
  template: `
    <article><h1 id="0">Auto Extraction Mode Installation</h1> If you do not want to use RadiusFixture as a plugin, the auto extraction&nbsp;utility&nbsp;can be executed running the following command (replacing /path/to/fitnesse-radius-fixture.jar with the actual fitnesse-radius-fixture.jar and /FitNesseRoot/path with actual FitNesseRoot path):
<br>
<br>
<pre>java -classpath /path/to/fitnesse-radius-fixture.jar com.github.gun88.fitnesse.plugin.radius.RadiusClientPlugin /FitNesseRoot/path</pre>
<br>
<br>
<h2 id="1">Documentation</h2> Documentation files are extracted in the 
<a href="PlugIns">FitNesse PlugIns</a> directory.
<br>
<br>
<h2 id="2">Dependencies</h2> RadiusFixture needs the 
<a href="http://www.jcraft.com/tinyRadius/">tinyRadius</a> library that, in plugin mode, is also auto-extracted.
<br>
<br>
<h2 id="3">Classpath</h2> During extraction, paths to required jars are replaced in the RadiusFixture.wiki so the user guide file can be executed correctly. To run :
<br>
<ol> 
 <li>tinyRadius.jar.path</li> 
 <li>radiusFixture.jar.path</li> 
</ol> 
<br>
<h2 id="4">Create Test</h2> If auto extraction mode was used as installation method, to create your test using RadiusFixture, you need to define paths to required jars in your test/suite page :
<br>
<pre>!path /actual/path/to/tinyRadius.jar
!path /actual/path/to/radiusFixture.jar</pre>
<br>NOTE: differently from plugin mode, paths must be defined due to the fact that these are not stored in 
<span class="fitnesse">FitNesse</span> context.
<br>More details on test creation available 
<a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.CreateYourFirstTest">here</a>.
<br></article>`,
  styles: ['']
})
export class AutoExtractionModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AutoExtractionModeComponent';
  }


}
