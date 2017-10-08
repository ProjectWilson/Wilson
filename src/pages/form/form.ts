import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import jsPDF from 'jspdf'
declare let jsPDF;

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

	forms: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController) {
	   this.forms = af.list('/gesprekforms');
  }

  gesprek = {}
    logForm(id) {
      if(this.gesprek['datum'] == null)
      {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let datum = year + '-' + month + '-' + day;

        this.gesprek['datum'] = datum;
      }
      console.log(this.gesprek);
      // if(id.akkoord == true)
      // {
          this.forms.push(this.gesprek);
      // }
      // else
      // {
      //   this.presentAlert();
      // }
    }

    inputEnable() {
        // console.log($ionicSlideBoxDelegate);
        document.querySelector('input[name="bpvdocent"]').removeAttribute('disabled');
        document.querySelector('input[name="praktijkopleider"]').removeAttribute('disabled');
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
