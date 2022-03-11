import { TypographyComponent } from './components/typography/typography.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
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
