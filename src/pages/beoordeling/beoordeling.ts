import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

export interface beoordeelforms {
    akkoord: boolean;
    vraag1: string;
    bpvbedrijf: string;
    bpvdocent: string;
    datum: string;
    naam: string;
    praktijkopleider: string;
}

@Component({
  selector: 'page-beoordeling',
  templateUrl: 'beoordeling.html'
})

export class BeoordelingPage {

	forms: FirebaseListObservable<any>;
  @ViewChild(Slides) slides: Slides;
  formsCollectionRef: AngularFirestoreCollection<beoordeelforms>;
  form$: Observable<beoordeelforms[]>;

  constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController, public afs: AngularFirestore) {
     this.formsCollectionRef = this.afs.collection<beoordeelforms>('beoordeelforms');
     this.forms = af.list('/beoordeelforms');
  }

  initialSchijt(){
    console.log('test');
  }

  rate = {};
  submitForm(id) {
          if(id.datum == null)
          {
              let date = new Date;
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();
              let datum = year + '-' + month + '-' + day;

              this.rate['datum'] = datum;
              console.log(1);
          }
          if(id.akkoord == true)
          {
            console.log(this.rate);
            //this.forms.push(this.rate);
            this.formsCollectionRef.add(this.rate);
            this.confirmAlert();
          }
          else{
            this.presentAlert();
          }
      }


      presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Akkoord',
        subTitle: 'Ga akkoord met het formulier',
        buttons: ['Sluit']
      });
      alert.present();
      }

    confirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Succes',
      subTitle: 'Gespreksformulier opgeslagen.',
      buttons: ['Sluit']
    });
    confirm.present();
    }

slideChanged() {
  let currentIndex = this.slides.getActiveIndex();
  let isBeg = this.slides.isBeginning();
  let isEnd = this.slides.isEnd();
  console.log(isEnd);
  console.log('Current index is', currentIndex);
  if(isBeg === true){
    document.getElementById('backButton').style.visibility = 'hidden';
    console.log('is begin');
  }
  else if(isEnd === true){
    document.getElementById('forwardButton').style.visibility = 'hidden';
    console.log('is einde');
  }
  else{
    document.getElementById('backButton').style.visibility = 'visible';
    document.getElementById('forwardButton').style.visibility = 'visible';
  }
}

vorigeSlide() {
  console.log('<');
  this.slides.lockSwipeToPrev(false);
  this.slides.slidePrev(200, true);
  this.slides.lockSwipeToPrev(true);
}
nextSlide() {
    console.log('>');
  this.slides.lockSwipeToNext(false);
  this.slides.slideNext(200, true);
  this.slides.lockSwipeToNext(true);
}

}
