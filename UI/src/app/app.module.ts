
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
import { UicomponentsComponent } from './pages/allcomponents/uicomponents/uicomponents.component';
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
import { KendocomponentsComponent } from './pages/allcomponents/kendocomponents/kendocomponents.component';
import { KendodropdownComponent } from './pages/allcomponents/kendocomponents/kendodropdown/kendodropdown.component';
import { KendotableComponent } from './pages/allcomponents/kendocomponents/kendotable/kendotable.component';
import { KendoinputsComponent } from './pages/allcomponents/kendocomponents/kendoinputs/kendoinputs.component';
import { KendomultiselectComponent } from './pages/allcomponents/kendocomponents/kendomultiselect/kendomultiselect.component';
import { AllcomponentsComponent } from './pages/allcomponents/allcomponents.component';
import { AngularcomponentsComponent } from './pages/allcomponents/angularcomponents/angularcomponents.component';
import { PrimecomponentsComponent } from './pages/allcomponents/primecomponents/primecomponents.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DatepickersComponent } from './components/datepickers/datepickers.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { HeadersComponent } from './components/headers/headers.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationlistComponent } from './components/notificationlist/notificationlist.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RadiobuttonsComponent } from './components/radiobuttons/radiobuttons.component';
import { SweetalertsComponent } from './components/sweetalerts/sweetalerts.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { TablesComponent } from './components/tables/tables.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ValidationsComponent } from './components/validations/validations.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { PrismComponent } from './components/prism/prism.component';
import { AngulartabsComponent } from './components/angulartabs/angulartabs.component';
import { ClipboardModule } from 'ngx-clipboard';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { TransformationStatuCodeColor } from './pages/allcomponents/kendocomponents/Pipes/TransformationStatuCodeColor.pipe';
import { KendodatepickerComponent } from './pages/allcomponents/kendocomponents/kendodatepicker/kendodatepicker.component';
import { KendouploadComponent } from './pages/allcomponents/kendocomponents/kendoupload/kendoupload.component';
import { KendocheckboxComponent } from './pages/allcomponents/kendocomponents/kendocheckbox/kendocheckbox.component';
import { KendoradiobuttonComponent } from './pages/allcomponents/kendocomponents/kendoradiobutton/kendoradiobutton.component';

@NgModule({
    declarations: [
    TransformationStatuCodeColor,
    AppComponent,
   // ColorsComponent,
   // NavigationsComponent,
    HeaderComponent,
    FooterComponent,
   // SidebarComponent,
   // ButtonsComponent,
  //  TypographyComponent,
    FoundationsComponent,
   
    PatternsComponent,
    ResourcesComponent,
    ContentComponent,
    // DynamicContentComponent,
    // DynamicSidebarComponent,
    UicomponentTabsDirective,
    KendocomponentsComponent,
    UicomponentsComponent,
    AllcomponentsComponent,
    AngularcomponentsComponent,
    PrimecomponentsComponent,
    AccordionsComponent,
    BadgesComponent,
    ButtonsComponent,
    BreadcrumbsComponent,
    DatepickersComponent,
    DropdownsComponent,
    ColumnsComponent,
    HeadersComponent,
    MultiselectComponent,
    NotificationsComponent,
    NotificationlistComponent,
    ProgressbarComponent,
    RadiobuttonsComponent,
    SweetalertsComponent,
    SearchboxComponent,
    TablesComponent,
    ToastsComponent,
    ToggleComponent,
    ValidationsComponent,
    WizardComponent,
    PrismComponent,
    AngulartabsComponent,
    KendodropdownComponent,
    KendotableComponent,
    KendoinputsComponent,
    KendomultiselectComponent,
    KendodatepickerComponent,
    KendouploadComponent,
    KendocheckboxComponent,
    KendoradiobuttonComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ClipboardModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule,
    LabelModule,
    InputsModule
    
  ],
  entryComponents: [
    // DynamicSample1Component,
    // DynamicSample2Component,
    // UnknownDynamicComponent,
   
    ColorsComponent,
    NavigationsComponent,
    
    TypographyComponent,
    IconsComponent,
    PrimitivesComponent,
    AlertsComponent,
    ModalsComponent,
    TabsComponent,
    FormsComponent,
    CheckboxsComponent,
    TooltipsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
