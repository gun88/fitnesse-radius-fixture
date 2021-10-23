import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-manual-mode',
  template: `
    <article><h1 id="0">Manual Mode Installation</h1> If you do not want to use RadiusFixture as a plugin or extracting files, all you need to do to execute tests is set paths to fitnesse-radius-fixture.jar and its dependencies in test pages.
<br>
<br>
<pre>!path /path/to/fitnesse-radius-fixture.jar
!path /path/to/tinyRadius.jar</pre>
<br>
<br>
<h2 id="1">Documentation</h2> Not available out of the box in manual mode
<br>
<br>
<h2 id="2">Classpath</h2> Must be defined manually.
<br>
<br>
<h2 id="3">Create Test</h2> With this installation method, to create your test using RadiusFixture, you need to define paths to required jars in your test/suite page :
<br>
<pre>!path /actual/path/to/tinyRadius.jar
!path /actual/path/to/radiusFixture.jar</pre>
<br>NOTE: differently from plugin mode, paths must be defined due to the fact that those are not stored in 
<span class="fitnesse">FitNesse</span> context.
<br>More details on test creation available 
<a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.CreateYourFirstTest">here</a>.
<br></article>`,
  styles: ['']
})
export class ManualModeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'ManualModeComponent';
  }


}
