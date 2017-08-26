import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {ConfigurationService} from './ConfigurationService';

import 'hammerjs';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PorfolioCardComponent } from './porfolio-card/porfolio-card.component';
import { TimelineCardComponent } from './timeline-card/timeline-card.component';
import { PorfolioHolderComponent } from './porfolio-holder/porfolio-holder.component';
import { TimelineHolderComponent } from './timeline-holder/timeline-holder.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryHolderComponent } from './gallery-holder/gallery-holder.component';
import { ContactHolderComponent } from './contact-holder/contact-holder.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsHolderComponent } from './events-holder/events-holder.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SlickModule } from 'ngx-slick';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProfileCardLeftComponent } from './profile-card-left/profile-card-left.component';
import { ProfileCardRightComponent } from './profile-card-right/profile-card-right.component';


const appRoutes: Routes = [
  // { path: 'portfolio', component: PorfolioHolderComponent },
  { path: 'timeline', component: TimelineHolderComponent },
  { path: 'gallery', component: GalleryHolderComponent },
  // { path: 'contact', component: ContactHolderComponent },
  { path: '', component: WelcomeComponent }
  ]


const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MenuBarComponent,
    PorfolioCardComponent,
    TimelineCardComponent,
    PorfolioHolderComponent,
    TimelineHolderComponent,
    WelcomeComponent,
    GalleryHolderComponent,
    ContactHolderComponent,
    ImageCardComponent,
    EventCardComponent,
    EventsHolderComponent,
    ProfileCardLeftComponent,
    ProfileCardRightComponent
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
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SlickModule.forRoot(),
    SwiperModule.forRoot(SWIPER_CONFIG),
    CarouselModule.forRoot()
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
