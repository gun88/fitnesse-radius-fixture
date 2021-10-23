import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-radius-fixture',
  template: `
    <article><div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide" class="suite">User Guide *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting" class="suite">Accounting *</a> ... </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication" class="suite">Authentication *</a> ... </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket" class="suite">Generic Packet *</a> ... </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation" class="static">Installation</a> ... </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation" class="suite">Radius Test Creation *</a> ... </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.SetUp" class="static">Set Up</a> </li> 
   </ul> </li> 
 </ul> 
</div> 
<br>
<br>
<div class="collapsible closed">
 <ul>
  <li><a href="#" class="expandall">Expand</a></li>
  <li><a href="#" class="collapseall">Collapse</a></li>
 </ul> 
 <p class="title">definitions</p> 
 <div>
  <p class="note">Release v<span class="meta">undefined variable: version</span></p> 
  <span class="meta">classpath: <span class="meta">undefined variable: tinyRadius.jar.path</span></span>
  <br>
  <span class="meta">classpath: <span class="meta">undefined variable: radiusFixture.jar.path</span></span>
  <br>
  <span class="meta">variable defined: TEST_SYSTEM=slim</span> 
  <br>
 </div> 
</div></article>`,
  styles: ['']
})
export class RadiusFixtureComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'RadiusFixtureComponent';
  }


}
