import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-script-multiple-packet-type',
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
  <span class="meta">variable defined: REQUEST_AUTH= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 User-Name: anon{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_AUTH= {{'{'}}{{'{'}}{{'{'}}Access-Accept, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_ACCT= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_ACCT= {{'{'}}{{'{'}}{{'{'}}Accounting-Response, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_ECHO= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 0 NAS-Identifier: foo.bar.org{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_ECHO= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 0 NAS-Identifier: foo.bar.org{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Multiple Packet Type in RADIUS Fixture Script Mode</h2> Different packet types can be sent with generic mode, included Authentication and Accounting packets.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td colspan="4">load radius generic endpoint</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>set acct port</td> 
   <td colspan="3">2888</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set auth port</td> 
   <td colspan="3">2889</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">1</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Access-Request, ID 0
User-Name: anon</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor5"> 
   <td colspan="4">clear request attributes</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">4</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Start</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor5"> 
   <td colspan="4">clear request attributes</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">254</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>NAS-Identifier</td> 
   <td>with value</td> 
   <td>foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Unknown (254)</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Unknown (254), ID 0
NAS-Identifier: foo.bar.org</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Unknown (254), ID 0
NAS-Identifier: foo.bar.org</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>Instead of packet type integer ids, labels can be used for Authentication and Accounting packet types. Labels are case insensitive and are:
<br>
<ul> 
 <li>auth (Authentication - id 1)</li> 
 <li>authentication (Authentication - id 1)</li> 
 <li>access (Authentication - id 1)</li> 
 <li>acct (Accounting - id 4)</li> 
 <li>accounting (Accounting - id 4)</li> 
</ul> 
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td colspan="4">load radius generic endpoint</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>set acct port</td> 
   <td colspan="3">2888</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set auth port</td> 
   <td colspan="3">2889</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">Authentication</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Access-Request, ID 0
User-Name: anon</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor5"> 
   <td colspan="4">clear request attributes</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">Accounting</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Start</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br></article>`,
  styles: ['']
})
export class GenericScriptMultiplePacketTypeComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericScriptMultiplePacketTypeComponent';
  }


}
