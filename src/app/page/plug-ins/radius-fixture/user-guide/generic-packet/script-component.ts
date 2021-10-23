import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-script-script',
  template: `
    <article><h2 id="0">RADIUS Communication - Script Mode</h2> This mode is useful for request definition when request contains several attributes.
<br>
<br>ATTENTION: differently from Accounting and Authentication script requests, sent via methods 
<i>send accounting</i> and 
<i>send authentication</i>, when a generic packet is sent (via the 
<i>send packet</i> method) the packet type should be explicitly defined (via the 
<i>set packet type</i> method) like in the following example.
<br>
<br>
<table> 
 <tbody>
  <tr> 
   <td>...</td> 
   <td colspan="2">...</td> 
  </tr> 
  <tr> 
   <td>set packet type</td> 
   <td colspan="2">12345</td> 
  </tr> 
  <tr> 
   <td>check</td> 
   <td>send packet</td> 
   <td>Unknown (12345)</td> 
  </tr> 
  <tr> 
   <td>...</td> 
   <td colspan="2">...</td> 
  </tr> 
 </tbody>
</table> 
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.MultiplePacketType" class="test">Multiple Packet Type +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.MultipleRequests" class="test">Multiple Requests +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Script.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class GenericScriptScriptComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericScriptScriptComponent';
  }


}
