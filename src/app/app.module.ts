import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

//AF2 Settings

export const firebaseConfig = {
    apiKey: "AIzaSyC-GkiU9lfJRwjQ2CwkEvGHde284ktI88o",
    authDomain: "projectwilson-c8f35.firebaseapp.com",
    databaseURL: "https://projectwilson-c8f35.firebaseio.com",
    projectId: "projectwilson-c8f35",
    storageBucket: "projectwilson-c8f35.appspot.com",
    messagingSenderId: "122197997808"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
