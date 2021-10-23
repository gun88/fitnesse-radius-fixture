import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-table-extend-dictionary',
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
  <span class="meta">variable defined: REQUEST= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 0 NAS-Identifier: foo.bar.org Custom-String: fooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Extend Dictionary in RADIUS Fixture Table Mode</h2> Following examples show how to extend Dictionary in RADIUS Communication.
<br>
<br>
<h3 id="1">Extend Dictionary in Table Header</h3> RADIUS Dictionary can be extended providing a custom dictionary into the table header constructor map.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td colspan="4">
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">host</td> 
       <td class="hash_value">127.0.0.1</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">genericPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
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
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>NAS-Identifier</td> 
   <td>Custom-String</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>254</td> 
   <td>foo.bar.org</td> 
   <td>fooBar</td> 
   <td><pre>Unknown (254), ID 0
NAS-Identifier: foo.bar.org
Custom-String: fooBar</pre></td> 
   <td><pre>Unknown (254), ID 0
NAS-Identifier: foo.bar.org
Custom-String: fooBar</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Extend Dictionary in Table Column</h3> RADIUS Dictionary can be extended providing a custom dictionary into the 
<i>dictionary</i> table column.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td colspan="5">
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">host</td> 
       <td class="hash_value">127.0.0.1</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">genericPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>dictionary</td> 
   <td>packet type</td> 
   <td>NAS-Identifier</td> 
   <td>Custom-String</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
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
   <td>254</td> 
   <td>foo.bar.org</td> 
   <td>fooBar</td> 
   <td><pre>Unknown (254), ID 0
NAS-Identifier: foo.bar.org
Custom-String: fooBar</pre></td> 
   <td><pre>Unknown (254), ID 0
NAS-Identifier: foo.bar.org
Custom-String: fooBar</pre></td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class GenericTableExtendDictionaryComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericTableExtendDictionaryComponent';
  }


}
