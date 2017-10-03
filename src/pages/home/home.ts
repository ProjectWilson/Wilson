import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { BeoordelingPage } from '../beoordeling/beoordeling';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  linkPage(pageke) {
    console.log(pageke);
    if(pageke == 'FormPage'){
      this.navCtrl.push(FormPage);
    }
    else if(pageke == 'BeoordelingPage'){
      this.navCtrl.push(BeoordelingPage)
    }
  }
}
