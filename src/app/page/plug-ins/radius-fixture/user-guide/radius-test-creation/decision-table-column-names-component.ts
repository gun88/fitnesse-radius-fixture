import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-table-decision-table-column-names',
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
  <span class="meta">variable defined: MAP=!{{'{'}}host: {{'$'}}{{'{'}}RADIUS_HOST}, acctPort: {{'$'}}{{'{'}}RADIUS_ACCT_PORT}, sharedSecret: {{'$'}}{{'{'}}RADIUS_SHARED_SECRET}, dictionary: ATTRIBUTE My-Attribute 250 string, requestId: 123, Acct-Status-Type: Start, Callback-Id: multi-reply, packetType: Accounting}</span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_1= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_2= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_3= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 123 Acct-Status-Type: Start Callback-Id: multi-reply{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: RESPONSE_3= {{'{'}}{{'{'}}{{'{'}}Accounting-Response, ID 123 Reply-Message: Accounting Done! Reply-Message: event: Start{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Decision Table Column Names</h2> In this page are listed Table column names to access RADIUS communication input and output.
<br>
<br>
<h3 id="1">Decision Table Input</h3> Here are listed available names for Radius Client Fixture tables 
<b>input</b>.
<br>
<br>
<table> 
 <tbody>
  <tr> 
   <td colspan="4">Comment</td> 
  </tr> 
  <tr> 
   <td>Name</td> 
   <td>Type</td> 
   <td>Description</td> 
   <td>Default</td> 
  </tr> 
  <tr> 
   <td>host</td> 
   <td>string</td> 
   <td>Server hostname or IP address</td> 
   <td>127.0.0.1</td> 
  </tr> 
  <tr> 
   <td>acctPort</td> 
   <td>number</td> 
   <td>Accounting messages port number</td> 
   <td>1812</td> 
  </tr> 
  <tr> 
   <td>authPort</td> 
   <td>number</td> 
   <td>Authentication messages port number</td> 
   <td>1813</td> 
  </tr> 
  <tr> 
   <td>genericPort</td> 
   <td>number</td> 
   <td>Generic messages port number</td> 
   <td>1813</td> 
  </tr> 
  <tr> 
   <td>sharedSecret</td> 
   <td>string</td> 
   <td>RADIUS server/client shared-secret</td> 
   <td>sharedSecret</td> 
  </tr> 
  <tr> 
   <td>socketTimeout</td> 
   <td>number</td> 
   <td>Socket timeout interval expressed in ms</td> 
   <td>3000</td> 
  </tr> 
  <tr> 
   <td>nullLabel</td> 
   <td>string</td> 
   <td>String value parsed as null</td> 
   <td>null</td> 
  </tr> 
  <tr> 
   <td>maxRetry</td> 
   <td>number</td> 
   <td>Maximum retries on communication fail</td> 
   <td>3</td> 
  </tr> 
  <tr> 
   <td>requestId</td> 
   <td>number</td> 
   <td>RADIUS request identifier</td> 
   <td>0</td> 
  </tr> 
  <tr> 
   <td>requestAuthenticator</td> 
   <td>octet</td> 
   <td>Authenticator bytes for PAP authentication protocol</td> 
   <td>randomly generated</td> 
  </tr> 
  <tr> 
   <td>packetType</td> 
   <td>string/number</td> 
   <td>RADIUS packet type (Accounting, Authentication or others)</td> 
   <td>N/A</td> 
  </tr> 
  <tr> 
   <td>dictionary</td> 
   <td>string</td> 
   <td>Dictionary string to extend default one</td> 
   <td>N/A</td> 
  </tr> 
  <tr> 
   <td>authPapPassword</td> 
   <td>string</td> 
   <td>Password for PAP authentication protocol</td> 
   <td>N/A</td> 
  </tr> 
  <tr> 
   <td>authChapPassword</td> 
   <td>string</td> 
   <td>Password for CHAP authentication protocol</td> 
   <td>N/A</td> 
  </tr> 
 </tbody>
</table> 
<br>Column names are case insensitive and any non-alphanumerical character is removed. For example, following names are equals:
<br>
<ul> 
 <li>sharedSecret</li> 
 <li>shared_secret</li> 
 <li>shared secret</li> 
 <li>shared-secret</li> 
 <li>SHARED_SECRET</li> 
 <li>SharedSecret</li> 
 <li>SHARED SECRET</li> 
</ul> 
<br>Every other column name is processed as RADIUS attribute (name must exist in dictionary). Here is an example for Endpoint definition, dictionary extension and parameters set:
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td colspan="10">ddt :radius client fixture</td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>host</td> 
   <td>acct port</td> 
   <td>shared secret</td> 
   <td>socket timeout</td> 
   <td>max retry</td> 
   <td>dictionary</td> 
   <td>null label</td> 
   <td>packet type</td> 
   <td>Acct-Status-Type</td> 
   <td>request?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td>foo-bar</td> 
   <td>1000</td> 
   <td>2</td> 
   <td>ATTRIBUTE My-Attribute 250 string</td> 
   <td>#null#</td> 
   <td>Accounting</td> 
   <td>Start</td> 
   <td><pre>Accounting-Request, ID 0
Acct-Status-Type: Start</pre></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>127.0.0.1</td> 
   <td>2888</td> 
   <td>foo-bar</td> 
   <td>1000</td> 
   <td>2</td> 
   <td>ATTRIBUTE My-Attribute 250 string</td> 
   <td>#null#</td> 
   <td>Accounting</td> 
   <td>#null#</td> 
   <td><pre>Accounting-Request, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>
<h3 id="2">Decision Table Output</h3> Here are listed available names for Radius Client Fixture tables 
<b>output</b>.
<br>
<br>
<table> 
 <tbody>
  <tr> 
   <td colspan="3">Comment</td> 
  </tr> 
  <tr> 
   <td>Name</td> 
   <td>Type</td> 
   <td>Description</td> 
  </tr> 
  <tr> 
   <td>request</td> 
   <td>string</td> 
   <td>RADIUS request dump</td> 
  </tr> 
  <tr> 
   <td>response</td> 
   <td>string</td> 
   <td>RADIUS response dump</td> 
  </tr> 
  <tr> 
   <td>responseId</td> 
   <td>number</td> 
   <td>RADIUS response id</td> 
  </tr> 
  <tr> 
   <td>packetTypeName</td> 
   <td>string</td> 
   <td>RADIUS response packet type name</td> 
  </tr> 
 </tbody>
</table> 
<br>Column names are case insensitive and any non-alphanumerical character is removed. For example, following names are equals:
<br>
<ul> 
 <li>packetTypeName</li> 
 <li>packet_type_name</li> 
 <li>packet type name</li> 
 <li>packet-type-name</li> 
 <li>PACKET_TYPE_NAME</li> 
 <li>PacketTypeName</li> 
 <li>PACKET TYPE NAME</li> 
</ul> 
<br>Every other column name is processed as RADIUS attribute (name must exist in dictionary). Here is an example for retrieving response data:
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
       <td class="hash_key">acctPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">dictionary</td> 
       <td class="hash_value">ATTRIBUTE My-Attribute 250 string</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">requestId</td> 
       <td class="hash_value">123</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">Acct-Status-Type</td> 
       <td class="hash_value">Start</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">Callback-Id</td> 
       <td class="hash_value">multi-reply</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">packetType</td> 
       <td class="hash_value">Accounting</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>request?</td> 
   <td>response?</td> 
   <td>response id?</td> 
   <td>packet type name?</td> 
   <td>Reply-Message?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td><pre>Accounting-Request, ID 123
Acct-Status-Type: Start
Callback-Id: multi-reply</pre></td> 
   <td><pre>Accounting-Response, ID 123
Reply-Message: Accounting Done!
Reply-Message: event: Start</pre></td> 
   <td>123</td> 
   <td>Accounting-Response</td> 
   <td>Accounting Done!, event: Start</td> 
  </tr> 
 </tbody>
</table> 
<br>When response attribute id refers to a list, values can be retrieved one by one with array notation header.
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
       <td class="hash_key">acctPort</td> 
       <td class="hash_value">2888</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">foo-bar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">dictionary</td> 
       <td class="hash_value">ATTRIBUTE My-Attribute 250 string</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">requestId</td> 
       <td class="hash_value">123</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">Acct-Status-Type</td> 
       <td class="hash_value">Start</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">Callback-Id</td> 
       <td class="hash_value">multi-reply</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">packetType</td> 
       <td class="hash_value">Accounting</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowTitle"> 
   <td>request?</td> 
   <td>response?</td> 
   <td>response id?</td> 
   <td>packet type name?</td> 
   <td>Reply-Message[0]?</td> 
   <td>Reply-Message[1]?</td> 
  </tr> 
  <tr class="slimRowColor1"> 
   <td><pre>Accounting-Request, ID 123
Acct-Status-Type: Start
Callback-Id: multi-reply</pre></td> 
   <td><pre>Accounting-Response, ID 123
Reply-Message: Accounting Done!
Reply-Message: event: Start</pre></td> 
   <td>123</td> 
   <td>Accounting-Response</td> 
   <td>Accounting Done!</td> 
   <td>event: Start</td> 
  </tr> 
 </tbody>
</table></article>`,
  styles: ['']
})
export class TableDecisionTableColumnNamesComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'TableDecisionTableColumnNamesComponent';
  }


}
