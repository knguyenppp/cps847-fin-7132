import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { HourlyComponent } from './component/hourly/hourly.component';

const appRoutes: Routes = [{path: 'hourly', component: HourlyComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HourlyComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
