import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './components/colors/colors.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TypographyComponent } from './components/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    NavigationsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ButtonsComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
