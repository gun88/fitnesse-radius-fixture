import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-radius-test-creation',
  template: `
    <article><div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.CreateYourFirstTest" class="test">Create Your First Test +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.DecisionTableColumnNames" class="test">Decision Table Column Names +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.InitializationMapKeys" class="test">Initialization Map Keys +</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class RadiusTestCreationComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'RadiusTestCreationComponent';
  }


}
