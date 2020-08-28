import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Slides} from 'ionic-angular';
import {ViewChild} from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CekilenAracPage } from '../pages/cekilen-arac/cekilen-arac';
import { OtoparkPage } from '../pages/otopark/otopark';
import {ProfilPage } from '../pages/profil/profil';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CekilenAracPage,
    OtoparkPage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CekilenAracPage,
    OtoparkPage,
    ProfilPage
  ],
  providers: [
   /* {:"apiUrl",useValue:"https://mobilservices.kocaeli.bel.tr/api/GetOtoparkDolulukDurumu"},*/
    StatusBar,
    SplashScreen,
    Slides,
    ViewChild,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {
  constructor() { }
}
