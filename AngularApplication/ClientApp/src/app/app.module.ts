import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavBodyComponent } from './nav-body/nav-body.component';
import { ResumeComponent } from './resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavBodyComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: NavBodyComponent, pathMatch: 'full' },
      { path: 'resume', component: ResumeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent }
    ], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
