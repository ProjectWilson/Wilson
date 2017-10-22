import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { FormDBPage } from '../pages/gesprekDB/gesprekDB';
import { BeoordelingPage } from '../pages/beoordeling/beoordeling';
import { BeoordelingDBPage } from '../pages/beoordelingDB/beoordelingDB';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    FormDBPage,
    BeoordelingPage,
    BeoordelingDBPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FormPage,
    FormDBPage,
    BeoordelingPage,
    BeoordelingDBPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
