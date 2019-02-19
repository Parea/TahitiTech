import { HomeDetailsPage } from './../pages/home-details/home-details';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewsApiService } from './../services/newsapi.service';
import { HttpModule } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SQLite } from '@ionic-native/sqlite';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeDetailsPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeDetailsPage,
    TabsPage
  ],
  providers: [
    NewsApiService,
    StatusBar,
    SplashScreen,
    OneSignal,
    SpeechRecognition,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
