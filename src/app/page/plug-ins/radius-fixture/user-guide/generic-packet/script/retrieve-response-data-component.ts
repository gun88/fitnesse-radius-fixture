import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-generic-script-retrieve-response-data',
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
  <span class="meta">variable defined: RESPONSE_0= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 111 NAS-Identifier: foo.bar.org Callback-Id: simple-reply Proxy-State: 0x0012 Reply-Message: [NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_1= {{'{'}}{{'{'}}{{'{'}}Unknown (254), ID 222 NAS-Identifier: foo.bar.org Callback-Id: multi-reply Proxy-State: 0x0014 Reply-Message: NAS-Identifier: foo.bar.org Reply-Message: Callback-Id: multi-reply Reply-Message: Proxy-State: 0x0014{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Get Data from RADIUS Response Script Mode</h2> Following examples show how to retrieve data from responses.
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
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td colspan="4">load radius generic endpoint</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">254</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set request id</td> 
   <td colspan="3">111</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>NAS-Identifier</td> 
   <td>with value</td> 
   <td>foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Callback-Id</td> 
   <td>with value</td> 
   <td>simple-reply</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Proxy-State</td> 
   <td>with value</td> 
   <td>0x0012</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Unknown (254)</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="2">111</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Proxy-State</td> 
   <td>0x0012</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>[NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Unknown (254), ID 111
NAS-Identifier: foo.bar.org
Callback-Id: simple-reply
Proxy-State: 0x0012
Reply-Message: [NAS-Identifier: foo.bar.org][Callback-Id: simple-reply][Proxy-State: 0x0012]</pre></td> 
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
   <td>script</td> 
   <td colspan="3">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td colspan="4">load radius generic endpoint</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="3">254</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set request id</td> 
   <td colspan="3">222</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>NAS-Identifier</td> 
   <td>with value</td> 
   <td>foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Callback-Id</td> 
   <td>with value</td> 
   <td>multi-reply</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Proxy-State</td> 
   <td>with value</td> 
   <td>0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="2">Unknown (254)</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="2">222</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Proxy-State</td> 
   <td>0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>NAS-Identifier: foo.bar.org, Callback-Id: multi-reply, Proxy-State: 0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="2"><pre>Unknown (254), ID 222
NAS-Identifier: foo.bar.org
Callback-Id: multi-reply
Proxy-State: 0x0014
Reply-Message: NAS-Identifier: foo.bar.org
Reply-Message: Callback-Id: multi-reply
Reply-Message: Proxy-State: 0x0014</pre></td> 
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
   <td>script</td> 
   <td colspan="5">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td colspan="6">load radius generic endpoint</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="5">254</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set request id</td> 
   <td colspan="5">222</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>NAS-Identifier</td> 
   <td>with value</td> 
   <td colspan="3">foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Callback-Id</td> 
   <td>with value</td> 
   <td colspan="3">multi-reply</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Proxy-State</td> 
   <td>with value</td> 
   <td colspan="3">0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="4">Unknown (254)</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="4">222</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Proxy-State</td> 
   <td colspan="3">0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>at</td> 
   <td>0</td> 
   <td>NAS-Identifier: foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>at</td> 
   <td>1</td> 
   <td>Callback-Id: multi-reply</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>at</td> 
   <td>2</td> 
   <td>Proxy-State: 0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="4"><pre>Unknown (254), ID 222
NAS-Identifier: foo.bar.org
Callback-Id: multi-reply
Proxy-State: 0x0014
Reply-Message: NAS-Identifier: foo.bar.org
Reply-Message: Callback-Id: multi-reply
Reply-Message: Proxy-State: 0x0014</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>When attribute id refers to a list and order is not known, values can be checked one by one with method 
<i>response attribute contains</i>.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td colspan="4">radius client fixture</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td colspan="5">load radius generic endpoint</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set packet type</td> 
   <td colspan="4">254</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>set request id</td> 
   <td colspan="4">222</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>NAS-Identifier</td> 
   <td>with value</td> 
   <td colspan="2">foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Callback-Id</td> 
   <td>with value</td> 
   <td colspan="2">multi-reply</td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Proxy-State</td> 
   <td>with value</td> 
   <td colspan="2">0x0014</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>send packet</td> 
   <td colspan="3">Unknown (254)</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response id</td> 
   <td colspan="3">222</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response attribute</td> 
   <td>Proxy-State</td> 
   <td colspan="2">0x0014</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>ensure</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>contains</td> 
   <td>Proxy-State: 0x0014</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>ensure</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>contains</td> 
   <td>NAS-Identifier: foo.bar.org</td> 
  </tr> 
  <tr class="slimRowColor8"> 
   <td>ensure</td> 
   <td>response attribute</td> 
   <td>Reply-Message</td> 
   <td>contains</td> 
   <td>Callback-Id: multi-reply</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>response</td> 
   <td colspan="3"><pre>Unknown (254), ID 222
NAS-Identifier: foo.bar.org
Callback-Id: multi-reply
Proxy-State: 0x0014
Reply-Message: NAS-Identifier: foo.bar.org
Reply-Message: Callback-Id: multi-reply
Reply-Message: Proxy-State: 0x0014</pre></td> 
  </tr> 
 </tbody>
</table> 
<br></article>`,
  styles: ['']
})
export class GenericScriptRetrieveResponseDataComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'GenericScriptRetrieveResponseDataComponent';
  }


}
