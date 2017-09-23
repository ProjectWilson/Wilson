import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
    console.log(this.todo);
    this.forms.push(
     this.todo
    );
  }

}
