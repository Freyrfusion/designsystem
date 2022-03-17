import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './components/colors/colors.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { FoundationsComponent } from './pages/foundations/foundations.component';
import { UicomponentsComponent } from './pages/uicomponents/uicomponents.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ContentComponent } from './content/content.component';
// import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
// import { DynamicSidebarComponent } from './dynamic-sidebar/dynamic-sidebar.component';
// import { DynamicSample1Component } from './dynamic-sidebar/dynamic-sidebar.component';
// import { DynamicSample2Component } from './dynamic-sidebar/dynamic-sidebar.component';
// import { UnknownDynamicComponent } from './dynamic-sidebar/dynamic-sidebar.component';
import { UicomponentTabsDirective } from './uicomponent-tabs.directive';
import { IconsComponent } from './components/icons/icons.component';
import { PrimitivesComponent } from './components/primitives/primitives.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ModalsComponent } from './components/modals/modals.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormsComponent } from './components/forms/forms.component';
import { CheckboxsComponent } from './components/checkboxs/checkboxs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { KendocomponentsComponent } from './components/kendocomponents/kendocomponents.component';
import { KendodropdownComponent } from './components/kendocomponents/kendodropdown/kendodropdown.component';
import { KendotableComponent } from './components/kendocomponents/kendotable/kendotable.component';
import { KendoinputsComponent } from './components/kendocomponents/kendoinputs/kendoinputs.component';
import { KendomultiselectComponent } from './components/kendocomponents/kendomultiselect/kendomultiselect.component';

@NgModule({
  declarations: [
    AppComponent,
   // ColorsComponent,
   // NavigationsComponent,
    HeaderComponent,
    FooterComponent,
   // SidebarComponent,
   // ButtonsComponent,
  //  TypographyComponent,
    FoundationsComponent,
    UicomponentsComponent,
    PatternsComponent,
    ResourcesComponent,
    ContentComponent,
    // DynamicContentComponent,
    // DynamicSidebarComponent,
    UicomponentTabsDirective,
    KendocomponentsComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
    
  ],
  entryComponents: [
    // DynamicSample1Component,
    // DynamicSample2Component,
    // UnknownDynamicComponent,
    ColorsComponent,
    NavigationsComponent,
    ButtonsComponent,
    TypographyComponent,
    IconsComponent,
    PrimitivesComponent,
    AlertsComponent,
    ModalsComponent,
    TabsComponent,
    FormsComponent,
    CheckboxsComponent,
    TooltipsComponent,
    KendodropdownComponent,
    KendotableComponent,
    KendoinputsComponent,
    KendomultiselectComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
