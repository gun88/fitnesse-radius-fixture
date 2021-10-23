import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-scenario',
  template: `
    <article><h2 id="0">RADIUS Communication - Scenarios</h2> Scenario Tables are useful to build well-formed RADIUS Fixture Acceptance Tests, especially for:
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class GenericScenarioComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericScenarioComponent';
  }


}
