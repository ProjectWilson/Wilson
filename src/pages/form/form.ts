import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import jsPDF from 'jspdf'
declare let jsPDF;

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

	forms: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
	   this.forms = af.list('/beoordeelforms');
  }

  todo = {}
  logForm() {
	   this.forms.push(this.todo);
  }

  public download(id) {
        console.log(id.naam);
        let doc = new jsPDF();
        let beoordeling = id.beoordeling
        let beoordeling1 = doc.splitTextToSize("Beoordeling:" + beoordeling, 7.5);
        doc.text(20,20,"Naam:" + id.naam);
        doc.text(20,30,"Beoordeling:" + beoordeling1);
        doc.save('Test.pdf');
    }

}
