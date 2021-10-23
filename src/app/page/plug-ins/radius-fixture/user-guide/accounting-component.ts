import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-accounting-accounting',
  template: `
    <article><h2 id="0">RADIUS Accounting Communication</h2> Here is explained how to send RADIUS Accounting packet. Two modes are available: 
<i>Script Mode</i> and 
<i>Table Mode</i>.
<br>RADIUS Acceptance test (in both Table and Script mode) can be improved using 
<i>Scenario Tables</i>.
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Scenario" class="suite">Scenario *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script" class="suite">Script *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table" class="suite">Table *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
   </ul> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class AccountingAccountingComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AccountingAccountingComponent';
  }


}
