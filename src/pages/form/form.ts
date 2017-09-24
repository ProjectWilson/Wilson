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

  public download() {
console.log('loll');
        let doc = new jsPDF();
        doc.text(20,20,'Hello world');
        doc.save('Test.pdf');
    }

}
