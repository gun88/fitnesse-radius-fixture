import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-initialization-map-keys',
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
  <span class="meta">variable defined: MAP_1=!{{'{'}}host: localhost, acctPort: 1234, sharedSecret: fooBar, socketTimeout: 1000, maxRetry: 2, dictionary: ATTRIBUTE My-Attribute 250 string, nullLabel: #null#, packetType: Accounting}</span> 
  <br>
  <br>
  <span class="meta">variable defined: MAP_2=!{{'{'}}host: localhost, genericPort: 1234, sharedSecret: fooBar, packetType: Authentication, User-Name: anon}</span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_1= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0 Acct-Status-Type: Start{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_2= {{'{'}}{{'{'}}{{'{'}}Accounting-Request, ID 0{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
  <br>
  <span class="meta">variable defined: REQUEST_3= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 User-Name: anon{{'}'}}{{'}'}}{{'}'}} </span> 
  <br>
 </div> 
</div> 
<h2 id="0">Initialization Map Keys</h2> Here are listed available keys for Radius Client Fixture initialization map. Keys are case insensitive.
<br>
<br>
<table> 
 <tbody>
  <tr> 
   <td colspan="4">Comment</td> 
  </tr> 
  <tr> 
   <td>Key</td> 
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
<br>Here is an example for Endpoint definition, dictionary extension and default parameters:
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
       <td class="hash_key">host</td> 
       <td class="hash_value">localhost</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">acctPort</td> 
       <td class="hash_value">1234</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">fooBar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">socketTimeout</td> 
       <td class="hash_value">1000</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">maxRetry</td> 
       <td class="hash_value">2</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">dictionary</td> 
       <td class="hash_value">ATTRIBUTE My-Attribute 250 string</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">nullLabel</td> 
       <td class="hash_value">#null#</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">packetType</td> 
       <td class="hash_value">Accounting</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>Start</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start</pre></td> 
  </tr> 
  <tr class="slimRowColor3"> 
   <td>set request attribute</td> 
   <td>Acct-Status-Type</td> 
   <td>with value</td> 
   <td>#null#</td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td colspan="2"><pre>Accounting-Request, ID 0</pre></td> 
  </tr> 
 </tbody>
</table> 
<br>Every other key is processed as RADIUS attribute (key must exist in dictionary) and stored in request as a default attribute. The following example show a table with default User-Name.
<br>
<br>
<table> 
 <tbody>
  <tr class="slimRowTitle"> 
   <td>script</td> 
   <td>radius client fixture</td> 
   <td>
    <table class="hash_table"> 
     <tbody>
      <tr class="hash_row"> 
       <td class="hash_key">host</td> 
       <td class="hash_value">localhost</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">genericPort</td> 
       <td class="hash_value">1234</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">sharedSecret</td> 
       <td class="hash_value">fooBar</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">packetType</td> 
       <td class="hash_value">Authentication</td> 
      </tr> 
      <tr class="hash_row"> 
       <td class="hash_key">User-Name</td> 
       <td class="hash_value">anon</td> 
      </tr> 
     </tbody>
    </table></td> 
  </tr> 
  <tr class="slimRowColor0"> 
   <td>check</td> 
   <td>request</td> 
   <td><pre>Access-Request, ID 0
User-Name: anon</pre></td> 
  </tr> 
 </tbody>
</table> 
<br></article>`,
  styles: ['']
})
export class InitializationMapKeysComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'InitializationMapKeysComponent';
  }


}
