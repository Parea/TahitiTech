import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  isSpeechAvailable = false;
  isListening = false;
  matches: Array<string> = [];

  constructor(public navCtrl: NavController, private platform: Platform, private speechRecognition: SpeechRecognition, private changeDetectorRef: ChangeDetectorRef) {
    platform.ready().then(() => {
      this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => this.isSpeechAvailable = available)
    });
  }


  public startListening(): void {
    this.isListening = true;
    this.matches = [];

    let options = {
      language: 'fr-FR',
      matches: 5,
      prompt: 'Je vous écoute !:',
      showPopup: true,
      showpartial: false
    }
    this.speechRecognition.startListening(options)
  .subscribe(
      (matches: Array<string>) => {
        this.isListening = false;
        this.matches = matches;
        this.changeDetectorRef.detectChanges();
      },
      (onerror) => {
        this.isListening = false;
        this.changeDetectorRef.detectChanges();
        console.log(onerror);
      }
    )
  }

  public stopListening(): void {
    this.speechRecognition.stopListening()
  }

}

