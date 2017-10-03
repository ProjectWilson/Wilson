import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { BeoordelingPage } from '../pages/beoordeling/beoordeling';
import { TabsPage } from '../pages/tabs/tabs';


//import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    HomePage,
    TabsPage,
    FormPage,
    BeoordelingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    TabsPage,
    BeoordelingPage
  ],
  providers: [
    StatusBar,
    SplashScreen
  ]
})
export class AppModule {}
