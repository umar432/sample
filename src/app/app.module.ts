
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from "./shared.service"
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';
import {CONST_ROUTING} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    MovieComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    FormsModule,
    HttpModule,
	CONST_ROUTING
	
  ],
   providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
