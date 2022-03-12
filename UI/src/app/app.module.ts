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
import { FoundationsComponent } from './pages/foundations/foundations.component';
import { UicomponentsComponent } from './pages/uicomponents/uicomponents.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ContentComponent } from './content/content.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { DynamicSidebarComponent } from './dynamic-sidebar/dynamic-sidebar.component';
import { DynamicSample1Component } from './dynamic-sidebar/dynamic-sidebar.component';
import { DynamicSample2Component } from './dynamic-sidebar/dynamic-sidebar.component';
import { UnknownDynamicComponent } from './dynamic-sidebar/dynamic-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    NavigationsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ButtonsComponent,
    TypographyComponent,
    FoundationsComponent,
    UicomponentsComponent,
    PatternsComponent,
    ResourcesComponent,
    ContentComponent,
    DynamicContentComponent,
    DynamicSidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
