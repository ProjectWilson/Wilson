import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

export interface gesprekforms {
    akkoord: string;
    beoordeling: string;
    bpvbedrijf: string;
    bpvdocent: string;
    datum: string;
    naam: string;
    praktijkopleider: string;
}
export interface gebruikers {

}

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

    @ViewChild(Slides) slides: Slides;
    forms: FirebaseListObservable<any>;
    formsCollectionRef: AngularFirestoreCollection<gesprekforms>;
    form$: Observable<gesprekforms[]>;
	gebruikersCollectionRef: AngularFirestoreCollection<gebruikers>;
	gebruikers$: Observable<gebruikers[]>;

    constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController, public afs: AngularFirestore) {
       this.formsCollectionRef = this.afs.collection<gesprekforms>('gesprekforms');
	   this.gebruikersCollectionRef = this.afs.collection<gebruikers>('gebruikers');
       this.forms = af.list('/gesprekforms');

	   this.gebruikers$ = this.gebruikersCollectionRef.snapshotChanges().map(actions => {
       return actions.map(action => {
         const data = action.payload.doc.data() as gebruikers;
         const id = action.payload.doc.id;
         return { id, ...data };
       });
     });
  }

  radioValue(value) {
    this.gesprek['BblOrBol'] = value;
}

	// studentenlijst = {
	// 	'studentnummer': '',
	// 	'roepnaam': '',
	// 	'voorvoegsel': '',
	// 	'achternaam': '',
	// 	'telefoon': '',
	// 	'woonplaats': '',
	// 	'opleiding': '',
	// 	'email': '',
	// 	'praktijkopleider': '',
	// 	'bedrijf': '',
	// 	'bpvtelefoon': '',
	// 	'bpvbegeleider': ''
	// };
  //
	// StudentnummerInput;
	// autofill(test)
	// {
	// 	console.log(test);
	// 	this.gesprek = {
	// 		'naam' : this.studentenlijst.roepnaam + this.studentenlijst.voorvoegsel + this.studentenlijst.achternaam,
	// 		'studentnummer' : this.studentenlijst.studentnummer ,
	// 		'bpvdocent' : this.studentenlijst.bpvbegeleider,
	// 		'bpvbedrijf' : this.studentenlijst.bedrijf,
	// 		'praktijkopleider' : this.studentenlijst.praktijkopleider
	// 	};
	// }
  gesprek = {};
  logForm(id) {
                console.log(this.gesprek);
                // console.log(id.akkoord);

          // if(id.datum == null)
          // {
          //     let date = new Date;
          //     let year = date.getFullYear();
          //     let month = date.getMonth() + 1;
          //     let day = date.getDate();
          //     let datum = year + '-' + month + '-' + day;
          //
          //     this.gesprek['datum'] = datum;
          //     console.log(1);
          // }

            this.formsCollectionRef.add(this.gesprek);
            //  this.forms.push(this.gesprek);
            this.presentAlert();
      }

      inputEnable() {
            document.querySelector('input[name="naam"]').removeAttribute('disabled');
            document.querySelector('input[name="bpvbedrijf"]').removeAttribute('disabled');
            document.querySelector('input[name="bpvdocent"]').removeAttribute('disabled');
            document.querySelector('input[name="praktijkopleider"]').removeAttribute('disabled');
            document.querySelector('input[name="datum"]').removeAttribute('disabled');
        }

      presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Succes',
        subTitle: 'Gespreksformulier opgeslagen.',
        buttons: ['Sluit']
      });
      alert.present();
}

slideChanged() {
       // let currentIndex = this.slides.getActiveIndex();
       let isBeg = this.slides.isBeginning();
       let isEnd = this.slides.isEnd();

       if(isBeg === true) {
           document.getElementById('backButton').style.visibility = 'hidden';
           document.getElementById('forwardButton').style.visibility = 'visible';
       }
       else if(isEnd === true) {
           document.getElementById('forwardButton').style.visibility = 'hidden';
           document.getElementById('backButton').style.visibility = 'visible';
       }
       else {
           document.getElementById('backButton').style.visibility = 'visible';
           document.getElementById('forwardButton').style.visibility = 'visible';
       }
       //Deze geeft errors? Check -V-
  //     document.getElementById('gespreksbeoordeling-textarea').getElementsByTagName('textarea')[0].style.height = document.getElementById('textarea-slide').offsetHeight - document.getElementById('btnSendHeight').offsetHeight - document.getElementById('footer-tabs').getElementsByTagName('div')[0].offsetHeight + 'px';
   }

   vorigeSlide() {
       this.slides.lockSwipeToPrev(false);
       this.slides.slidePrev(200, true);
       this.slides.lockSwipeToPrev(true);
   }
   nextSlide() {
       this.slides.lockSwipeToNext(false);
       this.slides.slideNext(200, true);
       this.slides.lockSwipeToNext(true);
   }

	autofill() {
		this.gesprek.bpvbedrijf = "Timmerbedrijf Henri";
		this.gesprek.naam = "Sjaak van Appel";
		this.gesprek.bpvdocent = "Peer van Arendonk";
		this.gesprek.praktijkopleider = "van Bergen";
	}
}
