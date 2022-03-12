import { ResourcesComponent } from './pages/resources/resources.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { UicomponentsComponent } from './pages/uicomponents/uicomponents.component';
import { FoundationsComponent } from './pages/foundations/foundations.component';
import { TypographyComponent } from './components/typography/typography.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //Pages
  {path:'foundations', component:FoundationsComponent},
  {path:'uicomponents', component:UicomponentsComponent},
  {path:'patterns', component:PatternsComponent},
  {path:'resources', component:ResourcesComponent},
  //Components
 {path:'colors', component:ColorsComponent},
 {path:'buttons', component:ButtonsComponent},
 {path:'navigations', component:NavigationsComponent},
 {path:'typography', component:TypographyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
