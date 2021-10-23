import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-authentication-authentication',
  template: `
    <article><h2 id="0">RADIUS Authentication Communication</h2> Here is explained how to send RADIUS Accounting packet (also called Access packet). Two modes are available: 
<i>Script Mode</i> and 
<i>Table Mode</i>.
<br>RADIUS Acceptance test (in both Table and Script mode) can be improved using 
<i>Scenario Tables</i>.
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Scenario" class="suite">Scenario *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script" class="suite">Script *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.PasswordDefinition" class="test">Password Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table" class="suite">Table *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.PasswordDefinition" class="test">Password Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
   </ul> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class AuthenticationAuthenticationComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AuthenticationAuthenticationComponent';
  }


}
