import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-authentication-script-extend-dictionary',
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
  <span class="meta">variable defined: REQUEST= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 User-Name: anon Framed-Protocol: PPP Custom-String: my-custom-string Custom-Integer: 1234 Custom-Octets: 0x00ab00 Custom-Date: 1634311572 Custom-Ipaddr: 1.2.3.4 Custom-Ipv6addr: 2001:8d0:200:640b:0:0:0:1 Custom-Ipv6prefix: 2001:8d0:200:640b:0:0:0:0/64 Vendor-Specific: CustomVendor (3000) Custom-Vendor-String: my-custom-vendor-string Vendor-Specific: CustomVendor (3000) Custom-Vendor-Integer: 9234{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE= {{'{'}}{{'{'}}{{'{'}}Access-Accept, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Extend Dictionary in RADIUS Authentication Fixture Script Mode</h2> Following examples show how to extend Dictionary in RADIUS Authentication Communication. The suggested method is 
<i>Scenario Table</i>.
<br>
<br>
<h3 id="1">Extend Dictionary in Table Header</h3> RADIUS Dictionary can be extended providing a custom dictionary into the table header constructor map.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td>radius client fixture</td> 
   <td colspan="2">
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">dictionary</td> 
       <td class="hash_value"><pre>

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
    </table></td> 
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
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Framed-Protocol</td> 
   <td>with value</td> 
   <td>PPP</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Integer</td> 
   <td>with value</td> 
   <td>1234</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Octets</td> 
   <td>with value</td> 
   <td>0x00ab00</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Date</td> 
   <td>with value</td> 
   <td>1634311572</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipaddr</td> 
   <td>with value</td> 
   <td>1.2.3.4</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipv6addr</td> 
   <td>with value</td> 
   <td>2001:8d0:200:640b:0:0:0:1</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipv6prefix</td> 
   <td>with value</td> 
   <td>2001:8d0:200:640b:0:0:0:0/64</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Vendor-String</td> 
   <td>with value</td> 
   <td>my-custom-vendor-string</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Vendor-Integer</td> 
   <td>with value</td> 
   <td>9234</td> 
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
User-Name: anon
Framed-Protocol: PPP
Custom-String: my-custom-string
Custom-Integer: 1234
Custom-Octets: 0x00ab00
Custom-Date: 1634311572
Custom-Ipaddr: 1.2.3.4
Custom-Ipv6addr: 2001:8d0:200:640b:0:0:0:1
Custom-Ipv6prefix: 2001:8d0:200:640b:0:0:0:0/64
Vendor-Specific: CustomVendor (3000)
  Custom-Vendor-String: my-custom-vendor-string
Vendor-Specific: CustomVendor (3000)
  Custom-Vendor-Integer: 9234</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Extend Dictionary in Table Row</h3> RADIUS Dictionary can be extended providing a custom dictionary into the 
<i>extend dictionary</i> table row.
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
  <tr class="slimRowColor8"> 
   <td>extend dictionary</td> 
   <td colspan="3"><pre>

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
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Framed-Protocol</td> 
   <td>with value</td> 
   <td>PPP</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Integer</td> 
   <td>with value</td> 
   <td>1234</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Octets</td> 
   <td>with value</td> 
   <td>0x00ab00</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Date</td> 
   <td>with value</td> 
   <td>1634311572</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipaddr</td> 
   <td>with value</td> 
   <td>1.2.3.4</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipv6addr</td> 
   <td>with value</td> 
   <td>2001:8d0:200:640b:0:0:0:1</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipv6prefix</td> 
   <td>with value</td> 
   <td>2001:8d0:200:640b:0:0:0:0/64</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Vendor-String</td> 
   <td>with value</td> 
   <td>my-custom-vendor-string</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Vendor-Integer</td> 
   <td>with value</td> 
   <td>9234</td> 
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
User-Name: anon
Framed-Protocol: PPP
Custom-String: my-custom-string
Custom-Integer: 1234
Custom-Octets: 0x00ab00
Custom-Date: 1634311572
Custom-Ipaddr: 1.2.3.4
Custom-Ipv6addr: 2001:8d0:200:640b:0:0:0:1
Custom-Ipv6prefix: 2001:8d0:200:640b:0:0:0:0/64
Vendor-Specific: CustomVendor (3000)
  Custom-Vendor-String: my-custom-vendor-string
Vendor-Specific: CustomVendor (3000)
  Custom-Vendor-Integer: 9234</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="3">Extend Dictionary in <i>Scenario Table</i></h3> RADIUS Dictionary can be extended providing a custom dictionary into the 
<i>dictionary</i> table row.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>scenario</td> 
   <td>my auth request with dictionary</td> 
  </tr> 
  <tr class="slimRowColor9"> 
   <td colspan="2">load radius auth endpoint</td> 
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
  <tr class="slimRowColor1"> 
   <td colspan="4">my auth request with dictionary</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>User-Name</td> 
   <td>with value</td> 
   <td>anon</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Framed-Protocol</td> 
   <td>with value</td> 
   <td>PPP</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-String</td> 
   <td>with value</td> 
   <td>my-custom-string</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Integer</td> 
   <td>with value</td> 
   <td>1234</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Octets</td> 
   <td>with value</td> 
   <td>0x00ab00</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Date</td> 
   <td>with value</td> 
   <td>1634311572</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipaddr</td> 
   <td>with value</td> 
   <td>1.2.3.4</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipv6addr</td> 
   <td>with value</td> 
   <td>2001:8d0:200:640b:0:0:0:1</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Ipv6prefix</td> 
   <td>with value</td> 
   <td>2001:8d0:200:640b:0:0:0:0/64</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Vendor-String</td> 
   <td>with value</td> 
   <td>my-custom-vendor-string</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Custom-Vendor-Integer</td> 
   <td>with value</td> 
   <td>9234</td> 
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
User-Name: anon
Framed-Protocol: PPP
Custom-String: my-custom-string
Custom-Integer: 1234
Custom-Octets: 0x00ab00
Custom-Date: 1634311572
Custom-Ipaddr: 1.2.3.4
Custom-Ipv6addr: 2001:8d0:200:640b:0:0:0:1
Custom-Ipv6prefix: 2001:8d0:200:640b:0:0:0:0/64
Vendor-Specific: CustomVendor (3000)
  Custom-Vendor-String: my-custom-vendor-string
Vendor-Specific: CustomVendor (3000)
  Custom-Vendor-Integer: 9234</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class AuthenticationScriptExtendDictionaryComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AuthenticationScriptExtendDictionaryComponent';
  }


}
