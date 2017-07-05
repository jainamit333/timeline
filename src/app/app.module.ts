import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {ConfigurationService} from './ConfigurationService';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
