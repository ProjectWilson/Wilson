import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface gesprekforms {
  akkoord: boolean;
  beoordeling: string;
  bpvbedrijf: string;
  bpvdocent: string;
  datum: string;
  naam: string;
  praktijkopleider: string;
}

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

    forms: FirebaseListObservable<any>;
    gebruikers: FirebaseListObservable<any>;
    formsCollectionRef: AngularFirestoreCollection<gesprekforms>;
    form$: Observable<gesprekforms[]>;

    constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController, public afs: AngularFirestore) {
       this.formsCollectionRef = this.afs.collection<gesprekforms>('gesprekforms');
       this.forms = af.list('/gesprekforms');
       this.gebruikers = af.list('/gebruikers');
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
          if(id.datum == null)
          {
              let date = new Date;
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();
              let datum = year + '-' + month + '-' + day;

              this.gesprek['datum'] = datum;
              console.log(1);
          }
          if(id.akkoord == true)
          {
            this.formsCollectionRef.add(this.gesprek);
            //  this.forms.push(this.gesprek);
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
}
