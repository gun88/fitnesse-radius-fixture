import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-plugin-mode',
  template: `
    <article><h1 id="0">Plugin Mode Installation</h1> As shown in 
<a href="PlugIns.RadiusFixture.UserGuide">QuickStart</a> session, the plugin mode installation can be executed just placing the fitnesse-radius-fixture.jar in the 
<span class="fitnesse">FitNesse</span> plugin directory or by making the jar file available in the 
<span class="fitnesse">FitNesse</span> web server classpath. When the archive is available in classpath, documentation files and dependency libraries are automatically extracted and tuned.
<br>
<br>
<h2 id="1">Documentation</h2> Documentation files are automatically extracted in the 
<a href="PlugIns">FitNesse PlugIns</a> directory.
<br>
<br>
<h2 id="2">Dependencies</h2> RadiusFixture needs the 
<a href="http://www.jcraft.com/tinyRadius/">tinyRadius</a> library that, in plugin mode, is also auto-extracted.
<br>
<br>
<h2 id="3">Classpath</h2> During plugin mode initialization, paths to required jars are stored in 
<span class="fitnesse">FitNesse</span> context with the following keys:
<br>
<ol> 
 <li>tinyRadius.jar.path</li> 
 <li>radiusFixture.jar.path</li> 
</ol> 
<br>
<h2 id="4">Create Test</h2> To create a test using RadiusFixture, you just need to paste following lines in test/suite page:
<br>
<pre>!path {{'$'}}{{'{'}}tinyRadius.jar.path}
!path {{'$'}}{{'{'}}radiusFixture.jar.path}</pre>
<br>More details on test creation available 
<a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.CreateYourFirstTest">here</a>.
<br></article>`,
  styles: ['']
})
export class PluginModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'PluginModeComponent';
  }


}
