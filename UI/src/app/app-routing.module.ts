import { WizardComponent } from './components/wizard/wizard.component';
import { ValidationsComponent } from './components/validations/validations.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { TablesComponent } from './components/tables/tables.component';
import { SweetalertsComponent } from './components/sweetalerts/sweetalerts.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { RadiobuttonsComponent } from './components/radiobuttons/radiobuttons.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationlistComponent } from './components/notificationlist/notificationlist.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HeaderComponent } from './header/header.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { DatepickersComponent } from './components/datepickers/datepickers.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BadgesComponent } from './components/badges/badges.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { AngularcomponentsComponent } from './pages/allcomponents/angularcomponents/angularcomponents.component';
import { PrimecomponentsComponent } from './pages/allcomponents/primecomponents/primecomponents.component';
import { AllcomponentsComponent } from './pages/allcomponents/allcomponents.component';
import { KendotableComponent } from './components/kendocomponents/kendotable/kendotable.component';
import { KendomultiselectComponent } from './components/kendocomponents/kendomultiselect/kendomultiselect.component';
import { KendoinputsComponent } from './components/kendocomponents/kendoinputs/kendoinputs.component';
import { KendodropdownComponent } from './components/kendocomponents/kendodropdown/kendodropdown.component';
import { KendocomponentsComponent } from './components/kendocomponents/kendocomponents.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { UicomponentsComponent } from './pages/uicomponents/uicomponents.component';
import { FoundationsComponent } from './pages/foundations/foundations.component';
import { TypographyComponent } from './components/typography/typography.component';
//Foundation Components
import { ColorsComponent } from './components/colors/colors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from './components/icons/icons.component';
import { PrimitivesComponent } from './components/primitives/primitives.component';
//UI Components
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { CheckboxsComponent } from './components/checkboxs/checkboxs.component';
import { FormsComponent } from './components/forms/forms.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ModalsComponent } from './components/modals/modals.component';
import { AlertsComponent } from './components/alerts/alerts.component';
const routes: Routes = [
  //Pages
  {
    path: 'foundations', children: [
      { path: 'Colors', component: ColorsComponent },
      { path: 'Icons', component: IconsComponent },
      { path: 'Primitives', component: PrimitivesComponent },
      { path: 'Typography', component: TypographyComponent },
    ]
  },
  { path: 'components', children: [
  { path: 'uicomponents', children: [
    { path: 'Accordions', component: AccordionsComponent },
    { path: 'Alerts', component: AlertsComponent },
    { path: 'Badges', component: BadgesComponent },
    { path: 'Breadcrumbs', component: BreadcrumbsComponent },
    { path: 'Buttons', component: ButtonsComponent },
    { path: 'CheckBox', component: CheckboxsComponent },
    { path: 'Columns', component: ColumnsComponent },
    { path: 'Datepickers', component: DatepickersComponent },
    { path: 'Dropdowns', component: DropdownsComponent },
    { path: 'Forms', component: FormsComponent },
    { path: 'Headers', component: HeadersComponent },
    { path: 'Modals', component: ModalsComponent },
    { path: 'Multiselect', component: MultiselectComponent },
    { path: 'Navigation', component: NavigationsComponent },
    { path: 'NotificationList', component: NotificationlistComponent },
    { path: 'Notifications', component: NotificationsComponent },
    { path: 'Progressbar', component: ProgressbarComponent },
    { path: 'Radiobuttons', component: RadiobuttonsComponent },
    { path: 'Searchbox', component: SearchboxComponent },
    { path: 'Sweetalerts', component: SweetalertsComponent },
    { path: 'Tables', component: TablesComponent },
    { path: 'Tabs', component: TabsComponent },
    { path: 'Toasts', component: ToastsComponent },
    { path: 'Toggles', component: ToggleComponent },
    { path: 'Tooltip', component: TooltipsComponent },
    { path: 'Validations', component: ValidationsComponent },
    { path: 'Wizard', component: WizardComponent },
  ],
},   
{ path: 'kendocomponents', component: KendocomponentsComponent, children:[
  { path: 'kendodropdown', component: KendodropdownComponent },
  { path: 'kendoinputs', component: KendoinputsComponent },
  { path: 'kendomultiselect', component: KendomultiselectComponent },
  { path: 'kendotable', component: KendotableComponent },
  
] },
{ path: 'primecomponents', component: PrimecomponentsComponent, children:[
  { path: 'kendodropdown', component: KendodropdownComponent },
  { path: 'kendoinputs', component: KendoinputsComponent },
  { path: 'kendomultiselect', component: KendomultiselectComponent },
  { path: 'kendotable', component: KendotableComponent },
  
]},
{ path: 'angularcomponents', component: AngularcomponentsComponent, children:[
  { path: 'kendodropdown', component: KendodropdownComponent },
  { path: 'kendoinputs', component: KendoinputsComponent },
  { path: 'kendomultiselect', component: KendomultiselectComponent },
  { path: 'kendotable', component: KendotableComponent },
  
] }
]},
  { path: 'patterns', component: PatternsComponent, children:[

    
  ] },
  { path: 'resources', component: ResourcesComponent },

 
  //Components
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
