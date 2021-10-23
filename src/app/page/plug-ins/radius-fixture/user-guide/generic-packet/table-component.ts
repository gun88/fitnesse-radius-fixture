import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-table-table',
  template: `
    <article><h2 id="0">RADIUS Communication - Table Mode</h2> This mode is useful for multiple request communication.
<br>
<br>RADIUS client fixture can be used as a 
<i>DynamicDecisionTable</i>. Table name need the 
<i>ddt</i> prefix or a table type definition to work properly.
<br>
<br>
<h3 id="1">Dynamic Decision Table Prefix</h3> Add the 
<i>ddt</i> prefix to the table fixture.
<br>
<br>
<table> 
 <tbody>
  <tr> 
   <td>ddt: radius client fixture</td> 
   <td>...</td> 
  </tr> 
  <tr> 
   <td>...</td> 
   <td>...</td> 
  </tr> 
  <tr> 
   <td>...</td> 
   <td>...</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Table Type Definition</h3> Add the table type definition in test page or set up page.
<br>
<table> 
 <tbody>
  <tr> 
   <td colspan="2">define table type</td> 
  </tr> 
  <tr> 
   <td>radius client fixture</td> 
   <td>as ddt</td> 
  </tr> 
 </tbody>
</table> 
<br>
<div class="contents"> 
 <b>Contents:</b> 
 <ul class="toc1"> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.AttributesDefinition" class="test">Attributes Definition +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.EndpointDefinition" class="test">Endpoint Definition +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.ExtendDictionary" class="test">Extend Dictionary +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.MultiplePacketType" class="test">Multiple Packet Type +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.MultipleRequests" class="test">Multiple Requests +</a> </li> 
  <li> <a href="PlugIns.RadiusFixture.UserGuide.GenericPacket.Table.RetrieveResponseData" class="test">Retrieve Response Data +</a> </li> 
 </ul> 
</div> 
<br></article>`,
  styles: ['']
})
export class GenericTableTableComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericTableTableComponent';
  }


}
