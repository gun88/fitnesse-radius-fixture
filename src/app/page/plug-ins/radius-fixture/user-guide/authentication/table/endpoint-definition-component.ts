import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-authentication-table-endpoint-definition',
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
  <span class="meta">variable defined: REQUEST_0= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 User-Name: anon{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_1= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 User-Name: anon Filter-Id: fooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE= {{'{'}}{{'{'}}{{'{'}}Access-Accept, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Set Endpoint in RADIUS Authentication Fixture Table Mode</h2> Host, Port and Shared Secret are the minimum set of coordinates to set a RADIUS endpoint and can be defined as shown in the following examples.
<br>
<br>
<h3 id="1">Column Definition</h3> Each endpoint coordinate has a dedicated column.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td colspan="7">ddt :radius client fixture</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>host</td> 
   <td>auth port</td> 
   <td>shared secret</td> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>127.0.0.1</td> 
   <td>2889</td> 
   <td>foo-bar</td> 
   <td>Authentication</td> 
   <td>anon</td> 
   <td><pre>Access-Request, ID 0
User-Name: anon</pre></td> 
   <td><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>Also optional endpoint parameters can be defined in columns.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td colspan="9">ddt :radius client fixture</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>host</td> 
   <td>auth port</td> 
   <td>shared secret</td> 
   <td>socket timeout</td> 
   <td>max retry</td> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>127.0.0.1</td> 
   <td>2889</td> 
   <td>foo-bar</td> 
   <td>4000</td> 
   <td>4</td> 
   <td>Authentication</td> 
   <td>anon</td> 
   <td><pre>Access-Request, ID 0
User-Name: anon</pre></td> 
   <td><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Inline Header Definition</h3> Table header accepts endpoint coordinates in the following order: 
<i>hostname</i>, 
<i>port</i>, 
<i>shared secret</i>.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2889</td> 
   <td colspan="2">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>Filter-Id</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Authentication</td> 
   <td>anon</td> 
   <td>fooBar</td> 
   <td><pre>Access-Request, ID 0
User-Name: anon
Filter-Id: fooBar</pre></td> 
   <td><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>Only these three main coordinates can be defined in table header. Optional endpoint parameters can be defined as shown in the Colum Definition mode.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2889</td> 
   <td colspan="4">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>socket timeout</td> 
   <td>max retry</td> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>Filter-Id</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>4000</td> 
   <td>4</td> 
   <td>Authentication</td> 
   <td>anon</td> 
   <td>fooBar</td> 
   <td><pre>Access-Request, ID 0
User-Name: anon
Filter-Id: fooBar</pre></td> 
   <td><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="3">Endpoint Map Definition</h3> Table header accepts endpoint coordinates set via map. Endpoint related keys are the following:
<br>
<ul> 
 <li>host</li> 
 <li>sharedSecret</li> 
 <li>authPort</li> 
 <li>socketTimeout</li> 
 <li>maxRetry</li> 
</ul> 
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
       <td class="hash_key">authPort</td> 
       <td class="hash_value">2889</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>Filter-Id</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Authentication</td> 
   <td>anon</td> 
   <td>fooBar</td> 
   <td><pre>Access-Request, ID 0
User-Name: anon
Filter-Id: fooBar</pre></td> 
   <td><pre>Access-Accept, ID 0</pre></td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class AuthenticationTableEndpointDefinitionComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AuthenticationTableEndpointDefinitionComponent';
  }


}
