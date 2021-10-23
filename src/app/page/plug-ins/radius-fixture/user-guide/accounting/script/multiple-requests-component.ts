import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-accounting-script-multiple-requests',
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
  <span class="meta">variable defined: REQUEST_0= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start User-Name: fooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_1= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_2= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start User-Name: zooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE= {{'{'}}{{'{'}}{{'{'}}Accounting-Response, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Multiple Requests in RADIUS Accounting Fixture Script Mode</h2> Multiple request can be sent in script mode paying attention to update/remove attributes.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor6"> 
   <td colspan="4">load radius acct endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Start</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>fooBar</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: fooBar</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>zooBar</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: zooBar</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="1">Remove Attribute</h3> To remove an attribute, provide 
<i>null</i> as value.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor6"> 
   <td colspan="4">load radius acct endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Start</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>fooBar</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: fooBar</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>null</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
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
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>zooBar</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: zooBar</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Multiple Accounting Message</h3> Following example shows multiple RADIUS Accounting communication. However, for multiple communication, table mode is suggested.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>set host</td> 
   <td colspan="3">127.0.0.1</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>set acct port</td> 
   <td colspan="3">2888</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set shared secret</td> 
   <td colspan="3">foo-bar</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Callback-Id</td> 
   <td>with value</td> 
   <td>dump-acct-status-type</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>note</td> 
   <td colspan="3">sending start packet</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Start</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>event: Start</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>note</td> 
   <td colspan="3">sending alive packet</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Alive</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>event: Alive</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>note</td> 
   <td colspan="3">sending stop packet</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Stop</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send accounting</td> 
   <td colspan="2">Accounting-Response</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>event: Stop</td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class AccountingScriptMultipleRequestsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AccountingScriptMultipleRequestsComponent';
  }


}
