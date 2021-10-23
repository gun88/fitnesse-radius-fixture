import {Component} from '@angular/core';
import {BaseTestPage} from 'src/app/page/common/base-test-page';
import {PageService} from 'src/app/service/page.service';

@Component({
  selector: 'app-create-your-first-test',
  template: `
    <article>
      <div class="collapsible closed">
        <ul>
          <li><a href="#" class="expandall">Expand</a></li>
          <li><a href="#" class="collapseall">Collapse</a></li>
        </ul>
        <p class="title">Included page: <a href="PlugIns.RadiusFixture.UserGuide.SetUp">.PlugIns.RadiusFixture.UserGuide.SetUp</a> <a
          href="PlugIns.RadiusFixture.UserGuide.SetUp?edit&amp;redirectToReferer=true&amp;redirectAction=" class="edit">(edit)</a></p>
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
          <span class="meta">variable defined: AUTH_REQUEST= {{'{'}}{{'{'}}{{'{'}}Access-Request, ID 0 User-Name: user001 User-Password: 0x70617373776f7264303031{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
          <br>
          <span class="meta">variable defined: AUTH_RESPONSE= {{'{'}}{{'{'}}{{'{'}}Access-Accept, ID 0{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
          <br>
          <span class="meta">variable defined: ACCT_REQUEST_START= {{'{'}}{{'{'}}{{'{'}}
            Accounting-Request, ID 0 Acct-Status-Type: Start{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
          <br>
          <span class="meta">variable defined: ACCT_REQUEST_ALIVE= {{'{'}}{{'{'}}{{'{'}}
            Accounting-Request, ID 0 Acct-Status-Type: Alive{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
          <br>
          <span class="meta">variable defined: ACCT_REQUEST_STOP= {{'{'}}{{'{'}}{{'{'}}
            Accounting-Request, ID 0 Acct-Status-Type: Stop{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
          <br>
          <span class="meta">variable defined: ACCT_RESPONSE= {{'{'}}{{'{'}}{{'{'}}Accounting-Response, ID 0{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
          <br>
          <span class="meta">variable defined: ECHO_REQUEST= {{'{'}}{{'{'}}{{'{'}}
            Unknown (254), ID 0 NAS-Identifier: foo.bar.org{{'}'}}{{'}'}}{{'}'}} </span>
          <br>
        </div>
      </div>
      <h2 id="0">Create your first test</h2> To create your first test, retrieve your RADIUS server endpoint coordinates, then copy the
      following table and replace coordinates:
      <br>
      <ul>
        <li>RADIUS host (hostname or ip)</li>
        <li>RADIUS auth port (Authentication/Access RADIUS port)</li>
        <li>RADIUS acct port (Accounting RADIUS port)</li>
        <li>RADIUS shared secret (RADIUS Server shared secret)</li>
      </ul>
      <br>
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
        <tr class="slimRowColor3">
          <td>set auth port</td>
          <td colspan="3">2889</td>
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
        <tr class="slimRowColor0">
          <td>check</td>
          <td>request</td>
          <td colspan="2"><pre>Access-Request, ID 0
User-Name: user001
User-Password: 0x70617373776f7264303031</pre>
          </td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>response</td>
          <td colspan="2">
            <pre>Access-Accept, ID 0</pre>
          </td>
        </tr>
        <tr class="slimRowColor5">
          <td colspan="4">clear request attributes</td>
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
          <td>request</td>
          <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Start</pre>
          </td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>response</td>
          <td colspan="2">
            <pre>Accounting-Response, ID 0</pre>
          </td>
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
          <td>request</td>
          <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Alive</pre>
          </td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>response</td>
          <td colspan="2">
            <pre>Accounting-Response, ID 0</pre>
          </td>
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
          <td>request</td>
          <td colspan="2"><pre>Accounting-Request, ID 0
Acct-Status-Type: Stop</pre>
          </td>
        </tr>
        <tr class="slimRowColor0">
          <td>check</td>
          <td>response</td>
          <td colspan="2">
            <pre>Accounting-Response, ID 0</pre>
          </td>
        </tr>
        </tbody>
      </table>
      <br>NOTE: If your RADIUS Server supports different types of authentication, customize
      <i>User- Name</i> and
      <i>User-Password</i> rows. Click
      <a href="PlugIns.RadiusFixture.UserGuide.Authentication.Script.PasswordDefinition">here</a> to view different authentication and
      credential definition methods.
      <br>
      <br>
      <h3 id="1">Available and Suggested Table Types</h3> RadiusFixture provides both (Script Table and Decision Table) to implement RADIUS
      communication.
      <br>
      <br>Script Table is suggested when:
      <br>
      <ul>
        <li>Communication involve few RADIUS packets.</li>
        <li>RADIUS packet is complex and needs several attributes.</li>
      </ul>
      <br>Decision Table is suggested when:
      <br>
      <ul>
        <li>Communication involve several RADIUS packets.</li>
        <li>RADIUS packets are simple and need few attributes.</li>
        <li>RADIUS packets need several but common attributes that can be set as default for all packets.</li>
      </ul>
      <br>
      <h3 id="2">First Test Wiki Code</h3> If RadiusFixture is not installed as a plugin, remember to set or replace properties:
      <b>tinyRadius.jar.path</b>,
      <b>radiusFixture.jar.path</b>; with actual paths.
      <br>
      <br>
      <pre>
|import                                  |
|com.github.gun88.fitnesse.fixture.radius|

|script               |radius client fixture                     |
|set host             |{{'$'}}{{'{'}}RADIUS_HOST}                            |
|set auth port        |{{'$'}}{{'{'}}RADIUS_AUTH_PORT}                       |
|set acct port        |{{'$'}}{{'{'}}RADIUS_ACCT_PORT}                       |
|set shared secret    |{{'$'}}{{'{'}}RADIUS_SHARED_SECRET}                   |
|set request attribute|User-Name          |with value|user001    |
|set request attribute|User-Password      |with value|password001|
|check                |send authentication|Access-Accept         |
|check                |request            |{{'$'}}{{'{'}}AUTH_REQUEST}       |
|check                |response           |{{'$'}}{{'{'}}AUTH_RESPONSE}      |
|clear request attributes                                        |
|set request attribute|Acct-Status-Type   |with value|Start      |
|check                |send accounting    |Accounting-Response   |
|check                |request            |{{'$'}}{{'{'}}ACCT_REQUEST_START} |
|check                |response           |{{'$'}}{{'{'}}ACCT_RESPONSE}      |
|set request attribute|Acct-Status-Type   |with value|Alive      |
|check                |send accounting    |Accounting-Response   |
|check                |request            |{{'$'}}{{'{'}}ACCT_REQUEST_ALIVE} |
|check                |response           |{{'$'}}{{'{'}}ACCT_RESPONSE}      |
|set request attribute|Acct-Status-Type   |with value|Stop       |
|check                |send accounting    |Accounting-Response   |
|check                |request            |{{'$'}}{{'{'}}ACCT_REQUEST_STOP}  |
|check                |response           |{{'$'}}{{'{'}}ACCT_RESPONSE}      |

!define TEST_SYSTEM {{'{'}}slim{{'}'}}
!path {{'$'}}{{'{'}}tinyRadius.jar.path}
!path {{'$'}}{{'{'}}radiusFixture.jar.path}
</pre>
      <br>
      <br></article>`,
  styles: ['']
})
export class CreateYourFirstTestComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService);
  }

  getPageName() {
    return 'CreateYourFirstTestComponent';
  }


}
