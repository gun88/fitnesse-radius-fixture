import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-accounting-script-script',
  template: `
    <article><h2 id="0">RADIUS Accounting Communication - Script Mode</h2> This mode is useful for request definition when request contains several attributes.
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class AccountingScriptScriptComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AccountingScriptScriptComponent';
  }


}
