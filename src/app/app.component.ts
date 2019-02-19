import { OneSignal } from '@ionic-native/onesignal';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private oneSignal: OneSignal, private speechRecognition: SpeechRecognition) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.oneSignal.startInit('7f06ab05-34d6-4908-bce1-6c703e4df1f5', '157333484297');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe(() => {});
      this.oneSignal.handleNotificationOpened().subscribe(() => {});
      this.oneSignal.endInit();

      this.speechRecognition.requestPermission()
    .then(
    () => console.log('Accorder !'),
    () => console.log('Refuser !'))

      this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log("Droit d'utiliser le reconnaissance vocale : " + hasPermission));

    });
  }
}
