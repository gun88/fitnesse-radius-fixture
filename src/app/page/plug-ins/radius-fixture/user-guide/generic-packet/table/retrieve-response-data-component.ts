import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-table-retrieve-response-data',
  template: `
    <article><div class="collapsible closed">
 <ul>
  <li><a href="#" class="expandall">Expand</a></li>
  <li><a href="#" class="collapseall">Collapse</a></li>
 </ul> 
 <p class="title">Included page: <a href="PlugIns.RadiusFixture.UserGuide.SetUp">.PlugIns.RadiusFixture.UserGuide.SetUp</a> <a href="PlugIns.RadiusFixture.UserGuide.SetUp?edit&amp;redirectToReferer=true&amp;redirectAction=" class="edit">(edit)</a></p> 
 <div>
  <table> 
   <tbody>
    <tr class="slimRowTitle"> 
     <td>import</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>com.github.gun88.fitnesse.fixture.radius</td> 
    </tr> 
   </tbody>
  </table> 
  <br>
  <div class="collapsible closed">
   <ul>
    <li><a href="#" class="expandall">Expand</a></li>
    <li><a href="#" class="collapseall">Collapse</a></li>
   </ul> 
   <p class="title">definitions</p> 
   <div>
    <span class="meta">variable defined: RADIUS_HOST=127.0.0.1</span> 
    <br>
    <span class="meta">variable defined: RADIUS_SHARED_SECRET=foo-bar</span> 
    <br>
    <span class="meta">variable defined: RADIUS_GENERIC_PORT=2888</span> 
    <br>
    <span class="meta">variable defined: RADIUS_ACCT_PORT=2888</span> 
    <br>
    <span class="meta">variable defined: RADIUS_AUTH_PORT=2889</span> 
    <br>
    <span class="meta">variable defined: RADIUS_SOCKET_TIMEOUT=500</span> 
    <br>
   </div> 
  </div> 
  <br>
  <div class="collapsible closed">
   <ul>
    <li><a href="#" class="expandall">Expand</a></li>
    <li><a href="#" class="collapseall">Collapse</a></li>
   </ul> 
   <p class="title">Custom Dictionary</p> 
   <div>
    <span class="meta">variable defined: CUSTOM_DICTIONARY= {{'{'}}{{'{'}}{{'{'}} ATTRIBUTE Custom-String 201 string ATTRIBUTE Custom-Octets 202 octets ATTRIBUTE Custom-Integer 203 integer ATTRIBUTE Custom-Date 204 date ATTRIBUTE Custom-Ipaddr 205 ipaddr ATTRIBUTE Custom-Ipv6addr 206 ipv6addr ATTRIBUTE Custom-Ipv6prefix 207 ipv6prefix # Wi-Fi Alliance - Wireless ISP Roaming - Best Current Practices v1, # Feb 2003, p 14 # http://www.weca.net/OpenSection/downloads/WISPr_V1.0.pdf # https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers VENDOR 3000 CustomVendor VENDORATTR 3000 Custom-Vendor-String 1 string VENDORATTR 3000 Custom-Vendor-Integer 2 integer {{'}'}}{{'}'}}{{'}'}} </span> 
    <br>
   </div> 
  </div> 
  <br>
  <table> 
   <tbody>
    <tr class="slimRowTitle"> 
     <td>script</td> 
     <td colspan="5">radius server mock</td> 
    </tr> 
    <tr class="slimRowColor6"> 
     <td>acct port</td> 
     <td colspan="5">2888</td> 
    </tr> 
    <tr class="slimRowColor9"> 
     <td>auth port</td> 
     <td colspan="5">2889</td> 
    </tr> 
    <tr class="slimRowColor5"> 
     <td>sharedSecret</td> 
     <td colspan="5">foo-bar</td> 
    </tr> 
    <tr class="slimRowColor6"> 
     <td>add user</td> 
     <td>admin</td> 
     <td>with password</td> 
     <td>password000</td> 
     <td>and role</td> 
     <td>admin</td> 
    </tr> 
    <tr class="slimRowColor6"> 
     <td>add user</td> 
     <td>user001</td> 
     <td>with password</td> 
     <td>password001</td> 
     <td>and role</td> 
     <td>red_write</td> 
    </tr> 
    <tr class="slimRowColor6"> 
     <td>add user</td> 
     <td>anon</td> 
     <td>with password</td> 
     <td>no-password</td> 
     <td>and role</td> 
     <td>anon</td> 
    </tr> 
    <tr class="slimRowColor9"> 
     <td>show</td> 
     <td colspan="5">start server</td> 
    </tr> 
   </tbody>
  </table> 
  <br>
  <table> 
   <tbody>
    <tr class="slimRowTitle"> 
     <td>scenario</td> 
     <td>load radius acct endpoint</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set host</td> 
     <td>127.0.0.1</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set acct port</td> 
     <td>2888</td> 
    </tr> 
    <tr class="slimRowColor3"> 
     <td>set shared secret</td> 
     <td>foo-bar</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set socket timeout</td> 
     <td>500</td> 
    </tr> 
   </tbody>
  </table> 
  <br>
  <table> 
   <tbody>
    <tr class="slimRowTitle"> 
     <td>scenario</td> 
     <td>load radius auth endpoint</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set host</td> 
     <td>127.0.0.1</td> 
    </tr> 
    <tr class="slimRowColor3"> 
     <td>set auth port</td> 
     <td>2889</td> 
    </tr> 
    <tr class="slimRowColor3"> 
     <td>set shared secret</td> 
     <td>foo-bar</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set socket timeout</td> 
     <td>500</td> 
    </tr> 
   </tbody>
  </table> 
  <br>
  <table> 
   <tbody>
    <tr class="slimRowTitle"> 
     <td>scenario</td> 
     <td>load radius generic endpoint</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set host</td> 
     <td>127.0.0.1</td> 
    </tr> 
    <tr class="slimRowColor2"> 
     <td>set generic port</td> 
     <td>2888</td> 
    </tr> 
    <tr class="slimRowColor3"> 
     <td>set shared secret</td> 
     <td>foo-bar</td> 
    </tr> 
    <tr class="slimRowColor0"> 
     <td>set socket timeout</td> 
     <td>500</td> 
    </tr> 
   </tbody>
  </table> 
  <br>
 </div> 
</div> 
<br>
<div class="collapsible closed">
 <ul>
  <li><a href="#" class="expandall">Expand</a></li>
  <li><a href="#" class="collapseall">Collapse</a></li>
 </ul> 
 <p class="title">definitions</p> 
 <div>
  <span class="meta">variable defined: REPLY_0=[NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]</span> 
  <br>
  <br>
  <span class="meta">variable defined: REPLY_1=NAS-Identifier: foo.bar.org, Callback-Id: multi-reply, Proxy-State: 0x0012</span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_0= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 111 NAS-Identifier: foo.bar.org Callback-Id: simple-reply Proxy-State: 0x0012 Reply-Message: [NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_1= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 222 NAS-Identifier: foo.bar.org Callback-Id: multi-reply Proxy-State: 0x0012 Reply-Message: NAS-Identifier: foo.bar.org Reply-Message: Callback-Id: multi-reply Reply-Message: Proxy-State: 0x0012{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Get Data from RADIUS Response Table Mode</h2> Following examples show how to retrieve data from responses.
<br>
<br>NOTE: RADIUS Mock Server returns customized 
<i>Reply-Message</i> when 
<i>Callback-Id</i> is set to 
<i>simple-reply</i> or 
<i>multi-reply</i>.
<br>
<br>
<h3 id="1">Single Data</h3> Retrieve single data from RADIUS Response.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td colspan="7">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>request id</td> 
   <td>NAS-Identifier</td> 
   <td>Callback-Id</td> 
   <td>Proxy-State</td> 
   <td>response id?</td> 
   <td>Proxy-State?</td> 
   <td>Reply-Message?</td> 
   <td>response?</td> 
   <td>packet type name?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>254</td> 
   <td>111</td> 
   <td>foo.bar.org</td> 
   <td>simple-reply</td> 
   <td>0x0012</td> 
   <td>111</td> 
   <td>0x0012</td> 
   <td>[NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]</td> 
   <td><pre>Unknown (254), ID 111
NAS-Identifier: foo.bar.org
Callback-Id: simple-reply
Proxy-State: 0x0012
Reply-Message: [NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]</pre></td> 
   <td>Unknown (254)</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Multiple Data in Single Field</h3> When response attribute id refers to a list, values are concatenated together and split by comma.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td colspan="7">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>request id</td> 
   <td>NAS-Identifier</td> 
   <td>Callback-Id</td> 
   <td>Proxy-State</td> 
   <td>response id?</td> 
   <td>Proxy-State?</td> 
   <td>Reply-Message?</td> 
   <td>response?</td> 
   <td>packet type name?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>254</td> 
   <td>222</td> 
   <td>foo.bar.org</td> 
   <td>multi-reply</td> 
   <td>0x0012</td> 
   <td>222</td> 
   <td>0x0012</td> 
   <td>NAS-Identifier: foo.bar.org, Callback-Id: multi-reply, Proxy-State: 0x0012</td> 
   <td><pre>Unknown (254), ID 222
NAS-Identifier: foo.bar.org
Callback-Id: multi-reply
Proxy-State: 0x0012
Reply-Message: NAS-Identifier: foo.bar.org
Reply-Message: Callback-Id: multi-reply
Reply-Message: Proxy-State: 0x0012</pre></td> 
   <td>Unknown (254)</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="3">Multiple Data in Multiple Field</h3> When response attribute id refers to a list, values can be retrieved one by one with array notation header.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td colspan="9">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>request id</td> 
   <td>NAS-Identifier</td> 
   <td>Callback-Id</td> 
   <td>Proxy-State</td> 
   <td>response id?</td> 
   <td>Proxy-State?</td> 
   <td>Reply-Message[0]?</td> 
   <td>Reply-Message[1]?</td> 
   <td>Reply-Message[2]?</td> 
   <td>response?</td> 
   <td>packet type name?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>254</td> 
   <td>222</td> 
   <td>foo.bar.org</td> 
   <td>multi-reply</td> 
   <td>0x0012</td> 
   <td>222</td> 
   <td>0x0012</td> 
   <td>NAS-Identifier: foo.bar.org</td> 
   <td>Callback-Id: multi-reply</td> 
   <td>Proxy-State: 0x0012</td> 
   <td><pre>Unknown (254), ID 222
NAS-Identifier: foo.bar.org
Callback-Id: multi-reply
Proxy-State: 0x0012
Reply-Message: NAS-Identifier: foo.bar.org
Reply-Message: Callback-Id: multi-reply
Reply-Message: Proxy-State: 0x0012</pre></td> 
   <td>Unknown (254)</td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class GenericTableRetrieveResponseDataComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericTableRetrieveResponseDataComponent';
  }


}
