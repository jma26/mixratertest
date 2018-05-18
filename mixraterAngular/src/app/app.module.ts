import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { HttpService } from './http.service';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMixComponent } from './components/create-mix/create-mix.component';
import { AddTracksComponent } from './components/add-tracks/add-tracks.component';
import { ShowMixesComponent } from './components/show-mixes/show-mixes.component';
import { YourMixComponent } from './components/your-mix/your-mix.component';
import { ViewMixComponent } from './components/view-mix/view-mix.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMixComponent,
    AddTracksComponent,
    ShowMixesComponent,
    YourMixComponent,
    ViewMixComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
