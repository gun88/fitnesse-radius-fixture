import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-generic-packet',
  template: `
    <article><h2 id="0">RADIUS Generic Communication</h2> Here is explained how to send RADIUS Generic packet. Two modes are available: 
<i>Script Mode</i> and 
<i>Table Mode</i>.
<br>RADIUS Acceptance test (in both Table and Script mode) can be improved using 
<i>Scenario Tables</i>.
<br>
<br>In most cases, examples/tests are built around a custom packetType (254), supported by the RADIUS Server Mock. This is a simple echo service.
<br>
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Scenario" class="suite">Scenario *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Scenario.ScenarioTable" class="test">Scenario Table +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script" class="suite">Script *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.MultiplePacketType" class="test">Multiple Packet Type +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
   </ul> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table" class="suite">Table *</a> 
   <ul class="toc2"> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.MultiplePacketType" class="test">Multiple Packet Type +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
    <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
   </ul> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class GenericGenericPacketComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericGenericPacketComponent';
  }


}
