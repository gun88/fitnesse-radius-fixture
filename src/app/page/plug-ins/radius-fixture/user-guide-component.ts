import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-user-guide',
  template: `
    <article><h1 id="0">RadiusFixture User Guide</h1> 
<b>RadiusFixture</b> (fitnesse-radius-fixture) is a 
<span class="fitnesse">FitNesse</span> slim fixture for RADIUS protocol communications
<br>
<br>
<h2 id="1">Quick Start</h2> To start using RadiusFixture, just put the release jar into the 
<span class="fitnesse">FitNesse</span> plugins directory and restart 
<span class="fitnesse">FitNesse</span> Web Server, then you will able to run 
<a href="PlugIns.RadiusFixture.UserGuide">UserGuide</a> suite's tests.
<br>Go to the 
<a href="PlugIns.RadiusFixture.UserGuide.Installation">Installation</a> page to see more details and different installation modes.
<br>Go to 
<a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.CreateYourFirstTest">CreateYourFirstTest</a> to start writing test using RadiusFixture.
<br>
<br>NOTE: in user guide test, a connection to a mocked RADIUS server is used.
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting" class="suite">Accounting *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Scenario" class="suite">Scenario *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
     </ul> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script" class="suite">Script *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
     </ul> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table" class="suite">Table *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Accounting.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
     </ul> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication" class="suite">Authentication *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Scenario" class="suite">Scenario *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
     </ul> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script" class="suite">Script *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.PasswordDefinition" class="test">Password Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
     </ul> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table" class="suite">Table *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.PasswordDefinition" class="test">Password Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
     </ul> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket" class="suite">Generic Packet *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Scenario" class="suite">Scenario *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
     </ul> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script" class="suite">Script *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.MultiplePacketType" class="test">Multiple Packet Type +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
     </ul> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table" class="suite">Table *</a> 
     <ul class="toc3"> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.MultiplePacketType" class="test">Multiple Packet Type +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
      <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
     </ul> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation" class="static">Installation</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation.AutoExtractionMode" class="static">Auto Extraction Mode</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation.ManualMode" class="static">Manual Mode</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.Installation.PluginMode" class="static">Plugin Mode</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation" class="suite">Radius Test Creation *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.CreateYourFirstTest" class="test">Create Your First Test +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.DecisionTableColumnNames" class="test">Decision Table Column Names +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.RadiusTestCreation.InitializationMapKeys" class="test">Initialization Map Keys +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.SetUp" class="static">Set Up</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class UserGuideComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'UserGuideComponent';
  }


}
