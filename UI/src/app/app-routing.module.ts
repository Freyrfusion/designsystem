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
  { path: 'uicomponents', children: [
    { path: 'Buttons', component: ButtonsComponent },
    { path: 'Navigation', component: NavigationsComponent },
    { path: 'Tooltip', component: TooltipsComponent },
    { path: 'CheckBox', component: CheckboxsComponent },
    { path: 'Forms', component: FormsComponent },
    { path: 'Tabs', component: TabsComponent },
    { path: 'Modals', component: ModalsComponent },
    { path: 'Alerts', component: AlertsComponent },
    { path: 'Typography', component: TypographyComponent }
  ] },
  { path: 'patterns', component: PatternsComponent, children:[

    
  ] },
  { path: 'resources', component: ResourcesComponent },
  { path: 'kendocomponents', component: KendocomponentsComponent, children:[
    { path: 'kendodropdown', component: KendodropdownComponent },
    { path: 'kendoinputs', component: KendoinputsComponent },
    { path: 'kendomultiselect', component: KendomultiselectComponent },
    { path: 'kendotable', component: KendotableComponent },
    
  ] }
 
  //Components
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
