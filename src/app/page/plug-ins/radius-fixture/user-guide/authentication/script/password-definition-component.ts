import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-authentication-script-password-definition',
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
<h2 id="0">Password Definition in RADIUS Authentication Request</h2> In this page are collected Access Request examples supported by RADIUS Server Mock. Access Request examples explained here are:
<br>
<ul> 
 <li>Anonymous User (no-password)</li> 
 <li>Plain Text</li> 
 <li>PAP Protocol</li> 
 <li>CHAP Protocol</li> 
</ul> 
<br>
<h3 id="1">Anonymous User</h3> RADIUS Server Mock supports Anonymous users. Username should be provided via the 
<i>User-Name</i> attribute.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="4">load radius auth endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Plain Text</h3> RADIUS Server Mock supports Plain Text passwords. Username should be provided via the 
<i>User-Name</i> attribute and password via the 
<i>User-Password</i> attribute.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="4">load radius auth endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Password</td> 
   <td>with value</td> 
   <td>password001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Password</td> 
   <td>with value</td> 
   <td>wrongPassword</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>wrongUser</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Password</td> 
   <td>with value</td> 
   <td>password001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="3">PAP Protocol</h3> RADIUS Server Mock supports PAP Protocol passwords. Username should be provided via the 
<i>User-Name</i> attribute and password via the 
<i>User-Password</i> attribute.
<br>PAP passwords are built against 
<i>request authenticator</i> and 
<i>shared secret</i>. When not defined, the 
<i>request authenticator</i> is randomly created so, to set access credentials this way, a fixed 
<i>request authenticator</i> need to be set.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="4">load radius auth endpoint</td> 
  </tr> 
  <tr class="slimRowColor6"> 
   <td>set request authenticator</td> 
   <td colspan="3">0x000102030405060708900a0b0c0d0e0f</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Password</td> 
   <td>with value</td> 
   <td>0xa4bdb6ae9d8c1819c2152fc47bb1965d</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Password</td> 
   <td>with value</td> 
   <td>0xa0000000000000000000000000000001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>wrongUser</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Password</td> 
   <td>with value</td> 
   <td>0xa4bdb6ae9d8c1819c2152fc47bb1965d</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
 </tbody>
</table> 
<br>To use randomly created 
<i>request authenticator</i> and plain text passwords, just use the utility method 
<i>set auth pap password</i>.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="4">load radius auth endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor6"> 
   <td>set auth pap password</td> 
   <td colspan="3">password001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor6"> 
   <td>set auth pap password</td> 
   <td colspan="3">wrongPassword</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>wrongUser</td> 
  </tr> 
  <tr class="slimRowColor6"> 
   <td>set auth pap password</td> 
   <td colspan="3">password001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="4">PAP Protocol</h3> RADIUS Server Mock supports CHAP Protocol passwords. Username should be provided via the 
<i>User-Name</i> attribute, password via the 
<i>CHAP-Password</i> attribute and challenge via the 
<i>CHAP-Challenge</i> attribute.
<br>CHAP passwords are built against 
<i>CHAP-Challenge</i> attribute. When not defined, the 
<i>CHAP-Challenge</i> attribute is randomly created so, to set access credentials this way, a fixed 
<i>CHAP-Challenge</i> attribute need to be set.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="4">load radius auth endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Password</td> 
   <td>with value</td> 
   <td>0x02f9dd92e2c4bb53c0a262159fe5d2e4b0</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Challenge</td> 
   <td>with value</td> 
   <td>0x79e33e7957fa907665ad630318cefbbd</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>wrongUser</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Password</td> 
   <td>with value</td> 
   <td>0x02f9dd92e2c4bb53c0a262159fe5d2e4b0</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Challenge</td> 
   <td>with value</td> 
   <td>0x79e33e7957fa907665ad630318cefbbd</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Password</td> 
   <td>with value</td> 
   <td>0x0000000000000000000000000000000001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Challenge</td> 
   <td>with value</td> 
   <td>0x79e33e7957fa907665ad630318cefbbd</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Password</td> 
   <td>with value</td> 
   <td>0x02f9dd92e2c4bb53c0a262159fe5d2e4b0</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>CHAP-Challenge</td> 
   <td>with value</td> 
   <td>0x00000000000000000000000000000001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
 </tbody>
</table> 
<br>To use randomly created 
<i>CHAP-Challenge</i> attribute and plain text passwords, just use the utility method 
<i>set auth chap password</i>.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="4">load radius auth endpoint</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor7"> 
   <td>set auth chap password</td> 
   <td colspan="3">password001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>user001</td> 
  </tr> 
  <tr class="slimRowColor7"> 
   <td>set auth chap password</td> 
   <td colspan="3">wrongPassword</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>wrongUser</td> 
  </tr> 
  <tr class="slimRowColor7"> 
   <td>set auth chap password</td> 
   <td colspan="3">password001</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Reject</td> 
  </tr> 
 </tbody>
</table> 
<br></article>`,
  styles: ['']
})
export class AuthenticationScriptPasswordDefinitionComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AuthenticationScriptPasswordDefinitionComponent';
  }


}
