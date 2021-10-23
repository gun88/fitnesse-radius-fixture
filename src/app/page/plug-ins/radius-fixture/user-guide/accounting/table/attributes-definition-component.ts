import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-accounting-table-attributes-definition',
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
  <span class="meta">variable defined: REQUEST_1= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start User-Name: fooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_2= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start Class: A:fooBar Class: B:zooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_3= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 User-Name: fooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_4= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 User-Name: zooBar{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_5= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_6= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 User-Name: null{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE= {{'{'}}{{'{'}}{{'{'}}Accounting-Response, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Set Attributes in RADIUS Accounting Fixture Table Mode</h2> In table mode, attributes can be set or removed via columns. Default attributes can also be defined by header map.
<br>
<br>
<h3 id="1">Column Definition</h3> Single value attributes can be provided by column definition.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td colspan="2">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>Acct-Status-Type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>Start</td> 
   <td>fooBar</td> 
   <td><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: fooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>To provide attributes as list, use the 
<i>array push notation</i> (attribute name followed by open and closed brackets - Attribute-Name[]).
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td colspan="3">foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>Acct-Status-Type</td> 
   <td>Class[]</td> 
   <td>Class[]</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>Start</td> 
   <td>A:fooBar</td> 
   <td>B:zooBar</td> 
   <td><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
Class: A:fooBar
Class: B:zooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>To update an attribute, just change value in lines.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td>foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>fooBar</td> 
   <td><pre>Accounting-Request, ID 0
User-Name: fooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>Accounting</td> 
   <td>zooBar</td> 
   <td><pre>Accounting-Request, ID 0
User-Name: zooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>To remove an attribute, set its value to 
<i>null</i>.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td>foo-bar</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>fooBar</td> 
   <td><pre>Accounting-Request, ID 0
User-Name: fooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>Accounting</td> 
   <td>null</td> 
   <td><pre>Accounting-Request, ID 0</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>zooBar</td> 
   <td><pre>Accounting-Request, ID 0
User-Name: zooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>The null label can be customized via map key 
<i>nullLabel</i>.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td colspan="3">
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">host</td> 
       <td class="hash_value">127.0.0.1</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">acctPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">nullLabel</td> 
       <td class="hash_value">#null#</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>packet type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>fooBar</td> 
   <td><pre>Accounting-Request, ID 0
User-Name: fooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>Accounting</td> 
   <td>#null#</td> 
   <td><pre>Accounting-Request, ID 0</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Accounting</td> 
   <td>null</td> 
   <td><pre>Accounting-Request, ID 0
User-Name: null</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Default Attribute Value Definition</h3> Default attributes can be set via header map. Each table row will inherit these attributes.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td colspan="3">
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">host</td> 
       <td class="hash_value">127.0.0.1</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">acctPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">packetType</td> 
       <td class="hash_value">Accounting</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>Acct-Status-Type</td> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>Start</td> 
   <td>fooBar</td> 
   <td><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: fooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>The previous request can be also defined as the following table:
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>ddt :radius client fixture</td> 
   <td colspan="2">
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">host</td> 
       <td class="hash_value">127.0.0.1</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">acctPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">packetType</td> 
       <td class="hash_value">Accounting</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">Acct-Status-Type</td> 
       <td class="hash_value">Start</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>User-Name</td> 
   <td>request?</td> 
   <td>response?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>fooBar</td> 
   <td><pre>Accounting-Request, ID 0
Acct-Status-Type: Start
User-Name: fooBar</pre></td> 
   <td><pre>Accounting-Response, ID 0</pre></td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class AccountingTableAttributesDefinitionComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'AccountingTableAttributesDefinitionComponent';
  }


}
