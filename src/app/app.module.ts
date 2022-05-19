import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiEntryComponent } from './components/api-entry/api-entry.component';
import { HomeComponent } from './components/home/home.component';
import { PublicApiService } from './services/public-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiEntryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PublicApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
