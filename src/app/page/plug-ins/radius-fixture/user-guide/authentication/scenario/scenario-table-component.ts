import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-authentication-table-scenario-table',
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
  <span class="meta">variable defined: REQUEST= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 Framed-Protocol: PPP User-Name: anon Custom-String: my-custom-string{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE= {{'{'}}{{'{'}}{{'{'}}Access-Accept, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Scenario Table RADIUS Fixture Acceptance Tests</h2> Scenario Tables are useful to build well-formed RADIUS Fixture Acceptance Tests, especially for:
<br>
<ul> 
 <li>Dictionary definition/import</li> 
 <li>Endpoint definition/import</li> 
 <li>Base request definition/import</li> 
 <li>Script Flow Mode</li> 
</ul> 
<br>
<h3 id="1">RADIUS Dictionary Scenario</h3> Scenarios can be useful for reusable RADIUS Dictionary definitions
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>scenario</td> 
   <td>load auth dictionary</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>extend dictionary</td> 
   <td><pre>

ATTRIBUTE   Custom-String       201     string
ATTRIBUTE   Custom-Octets       202     octets
ATTRIBUTE   Custom-Integer      203     integer
ATTRIBUTE   Custom-Date         204     date
ATTRIBUTE   Custom-Ipaddr       205     ipaddr
ATTRIBUTE   Custom-Ipv6addr     206     ipv6addr
ATTRIBUTE   Custom-Ipv6prefix   207     ipv6prefix

# Wi-Fi Alliance - Wireless ISP Roaming - Best Current Practices v1,
# Feb 2003, p 14
# http://www.weca.net/OpenSection/downloads/WISPr_V1.0.pdf

# https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers

VENDOR          3000    CustomVendor

VENDORATTR      3000    Custom-Vendor-String    1   string
VENDORATTR      3000    Custom-Vendor-Integer   2   integer

</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor2"> 
   <td colspan="4">load auth dictionary</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>set host</td> 
   <td colspan="3">127.0.0.1</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set auth port</td> 
   <td colspan="3">2889</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set shared secret</td> 
   <td colspan="3">foo-bar</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Framed-Protocol</td> 
   <td>with value</td> 
   <td>PPP</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Access-Request, ID 0
Framed-Protocol: PPP
User-Name: anon
Custom-String: my-custom-string</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="2">0</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">RADIUS Endpoint Scenario</h3> Scenarios can be useful for reusable RADIUS Endpoint definitions
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>scenario</td> 
   <td>load auth endpoint scenario</td> 
  </tr> 
  <tr class="slimRowColor2"> 
   <td colspan="2">load auth dictionary</td> 
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
 </tbody>
</table> 
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td colspan="4">load auth endpoint scenario</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Framed-Protocol</td> 
   <td>with value</td> 
   <td>PPP</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Access-Request, ID 0
Framed-Protocol: PPP
User-Name: anon
Custom-String: my-custom-string</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="2">0</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="3">RADIUS Base Request Scenario</h3> Scenarios can be useful for reusable RADIUS Base Request definitions
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>scenario</td> 
   <td colspan="3">load auth base request</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td colspan="4">load auth endpoint scenario</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Framed-Protocol</td> 
   <td>with value</td> 
   <td>PPP</td> 
  </tr> 
 </tbody>
</table> 
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor4"> 
   <td colspan="4">load auth base request</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Access-Request, ID 0
Framed-Protocol: PPP
User-Name: anon
Custom-String: my-custom-string</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="2">0</td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="4">RADIUS Base Request Scenario with table - Script Flow Mode</h3> Scenarios can be useful for set RADIUS input parameters and get output in table mode
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>scenario</td> 
   <td>radius table request _</td> 
   <td colspan="2">requestId,responseId?</td> 
  </tr> 
  <tr class="slimRowColor4"> 
   <td colspan="4">load auth base request</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set request id</td> 
   <td colspan="3">@requestId</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send authentication</td> 
   <td colspan="2">Access-Accept</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td>$responseId=</td> 
   <td colspan="3">response id</td> 
  </tr> 
 </tbody>
</table> 
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td>radius client fixture</td> 
  </tr> 
 </tbody>
</table> 
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td colspan="2">radius table request</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>requestId</td> 
   <td>responseId?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>101</td> 
   <td>101</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>209</td> 
   <td>209</td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class AuthenticationTableScenarioTableComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AuthenticationTableScenarioTableComponent';
  }


}
