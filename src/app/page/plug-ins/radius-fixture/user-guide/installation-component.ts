import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-installation',
  template: `
    <article><h1 id="0">RadiusFixture installation</h1> RadiusFixture can be installed as a plugin or just provided during test executions.
<br>
<br>The suggested installation mode is the 
<a href="PlugIns.RadiusFixture.UserGuide.Installation.PluginMode">PluginMode</a>.
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation.AutoExtractionMode" class="static">Auto Extraction Mode</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation.ManualMode" class="static">Manual Mode</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation.PluginMode" class="static">Plugin Mode</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class InstallationComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'InstallationComponent';
  }


}
