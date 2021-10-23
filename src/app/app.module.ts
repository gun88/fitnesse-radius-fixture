import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {FooterComponent} from './component/footer/footer.component';
import {NotFoundComponent} from './page/common/not-found.component';
import {ReadmeComponent, SafeHtmlPipe} from './component/readme/readme.component';
import {HttpClientModule} from '@angular/common/http';
import {RecapTableComponent} from './component/recap-table/recap-table.component';
import {FrontPageComponent} from './page/front-page.component';
import {DisabledFunctionComponent} from './page/common/disabled-function.component';
import {PlugInsComponent} from './page/plug-ins.component';
import {AccountingTableScenarioTableComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/scenario/scenario-table-component';
import {AccountingScenarioComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/scenario-component';
import {AccountingScriptAttributesDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/script/attributes-definition-component';
import {AccountingScriptEndpointDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/script/endpoint-definition-component';
import {AccountingScriptExtendDictionaryComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/script/extend-dictionary-component';
import {AccountingScriptMultipleRequestsComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/script/multiple-requests-component';
import {AccountingScriptRetrieveResponseDataComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/script/retrieve-response-data-component';
import {AccountingScriptScriptComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/script-component';
import {AccountingTableAttributesDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/table/attributes-definition-component';
import {AccountingTableEndpointDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/table/endpoint-definition-component';
import {AccountingTableExtendDictionaryComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/table/extend-dictionary-component';
import {AccountingTableMultipleRequestsComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/table/multiple-requests-component';
import {AccountingTableRetrieveResponseDataComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/table/retrieve-response-data-component';
import {AccountingTableTableComponent} from './page/plug-ins/radius-fixture/user-guide/accounting/table-component';
import {AccountingAccountingComponent} from './page/plug-ins/radius-fixture/user-guide/accounting-component';
import {AuthenticationTableScenarioTableComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/scenario/scenario-table-component';
import {AuthenticationScenarioComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/scenario-component';
import {AuthenticationScriptAttributesDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script/attributes-definition-component';
import {AuthenticationScriptEndpointDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script/endpoint-definition-component';
import {AuthenticationScriptExtendDictionaryComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script/extend-dictionary-component';
import {AuthenticationScriptMultipleRequestsComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script/multiple-requests-component';
import {AuthenticationScriptPasswordDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script/password-definition-component';
import {AuthenticationScriptRetrieveResponseDataComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script/retrieve-response-data-component';
import {AuthenticationScriptScriptComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/script-component';
import {AuthenticationTableAttributesDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table/attributes-definition-component';
import {AuthenticationTableEndpointDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table/endpoint-definition-component';
import {AuthenticationTableExtendDictionaryComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table/extend-dictionary-component';
import {AuthenticationTableMultipleRequestsComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table/multiple-requests-component';
import {AuthenticationTablePasswordDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table/password-definition-component';
import {AuthenticationTableRetrieveResponseDataComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table/retrieve-response-data-component';
import {AuthenticationTableTableComponent} from './page/plug-ins/radius-fixture/user-guide/authentication/table-component';
import {AuthenticationAuthenticationComponent} from './page/plug-ins/radius-fixture/user-guide/authentication-component';
import {GenericTableScenarioTableComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/scenario/scenario-table-component';
import {GenericScenarioComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/scenario-component';
import {GenericScriptAttributesDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script/attributes-definition-component';
import {GenericScriptEndpointDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script/endpoint-definition-component';
import {GenericScriptExtendDictionaryComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script/extend-dictionary-component';
import {GenericScriptMultiplePacketTypeComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script/multiple-packet-type-component';
import {GenericScriptMultipleRequestsComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script/multiple-requests-component';
import {GenericScriptRetrieveResponseDataComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script/retrieve-response-data-component';
import {GenericScriptScriptComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/script-component';
import {GenericTableAttributesDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table/attributes-definition-component';
import {GenericTableEndpointDefinitionComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table/endpoint-definition-component';
import {GenericTableExtendDictionaryComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table/extend-dictionary-component';
import {GenericTableMultiplePacketTypeComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table/multiple-packet-type-component';
import {GenericTableMultipleRequestsComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table/multiple-requests-component';
import {GenericTableRetrieveResponseDataComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table/retrieve-response-data-component';
import {GenericTableTableComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet/table-component';
import {GenericGenericPacketComponent} from './page/plug-ins/radius-fixture/user-guide/generic-packet-component';
import {AutoExtractionModeComponent} from './page/plug-ins/radius-fixture/user-guide/installation/auto-extraction-mode-component';
import {ManualModeComponent} from './page/plug-ins/radius-fixture/user-guide/installation/manual-mode-component';
import {PluginModeComponent} from './page/plug-ins/radius-fixture/user-guide/installation/plugin-mode-component';
import {InstallationComponent} from './page/plug-ins/radius-fixture/user-guide/installation-component';
import {CreateYourFirstTestComponent} from './page/plug-ins/radius-fixture/user-guide/radius-test-creation/create-your-first-test-component';
import {TableDecisionTableColumnNamesComponent} from './page/plug-ins/radius-fixture/user-guide/radius-test-creation/decision-table-column-names-component';
import {InitializationMapKeysComponent} from './page/plug-ins/radius-fixture/user-guide/radius-test-creation/initialization-map-keys-component';
import {RadiusTestCreationComponent} from './page/plug-ins/radius-fixture/user-guide/radius-test-creation-component';
import {SetUpComponent} from './page/plug-ins/radius-fixture/user-guide/set-up-component';
import {UserGuideComponent} from './page/plug-ins/radius-fixture/user-guide-component';
import {RadiusFixtureComponent} from './page/plug-ins/radius-fixture-component';
import {ProjectsComponent} from './component/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    FrontPageComponent,
    NotFoundComponent,
    ReadmeComponent,
    RecapTableComponent,
    DisabledFunctionComponent,
    PlugInsComponent,
    SafeHtmlPipe,
    AccountingTableScenarioTableComponent,
    AccountingScenarioComponent,
    AccountingScriptAttributesDefinitionComponent,
    AccountingScriptEndpointDefinitionComponent,
    AccountingScriptExtendDictionaryComponent,
    AccountingScriptMultipleRequestsComponent,
    AccountingScriptRetrieveResponseDataComponent,
    AccountingScriptScriptComponent,
    AccountingTableAttributesDefinitionComponent,
    AccountingTableEndpointDefinitionComponent,
    AccountingTableExtendDictionaryComponent,
    AccountingTableMultipleRequestsComponent,
    AccountingTableRetrieveResponseDataComponent,
    AccountingTableTableComponent,
    AccountingAccountingComponent,
    AuthenticationTableScenarioTableComponent,
    AuthenticationScenarioComponent,
    AuthenticationScriptAttributesDefinitionComponent,
    AuthenticationScriptEndpointDefinitionComponent,
    AuthenticationScriptExtendDictionaryComponent,
    AuthenticationScriptMultipleRequestsComponent,
    AuthenticationScriptPasswordDefinitionComponent,
    AuthenticationScriptRetrieveResponseDataComponent,
    AuthenticationScriptScriptComponent,
    AuthenticationTableAttributesDefinitionComponent,
    AuthenticationTableEndpointDefinitionComponent,
    AuthenticationTableExtendDictionaryComponent,
    AuthenticationTableMultipleRequestsComponent,
    AuthenticationTablePasswordDefinitionComponent,
    AuthenticationTableRetrieveResponseDataComponent,
    AuthenticationTableTableComponent,
    AuthenticationAuthenticationComponent,
    GenericTableScenarioTableComponent,
    GenericScenarioComponent,
    GenericScriptAttributesDefinitionComponent,
    GenericScriptEndpointDefinitionComponent,
    GenericScriptExtendDictionaryComponent,
    GenericScriptMultiplePacketTypeComponent,
    GenericScriptMultipleRequestsComponent,
    GenericScriptRetrieveResponseDataComponent,
    GenericScriptScriptComponent,
    GenericTableAttributesDefinitionComponent,
    GenericTableEndpointDefinitionComponent,
    GenericTableExtendDictionaryComponent,
    GenericTableMultiplePacketTypeComponent,
    GenericTableMultipleRequestsComponent,
    GenericTableRetrieveResponseDataComponent,
    GenericTableTableComponent,
    GenericGenericPacketComponent,
    AutoExtractionModeComponent,
    ManualModeComponent,
    PluginModeComponent,
    InstallationComponent,
    CreateYourFirstTestComponent,
    TableDecisionTableColumnNamesComponent,
    InitializationMapKeysComponent,
    RadiusTestCreationComponent,
    SetUpComponent,
    UserGuideComponent,
    RadiusFixtureComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
