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
    console.log(typeof(pageke));
    if(pageke == 'FormPage'){
      this.navCtrl.push(FormPage);
      // GesprekformOnLoad
      document.getElementById('backButton').style.visibility = 'hidden';
      document.getElementById('gespreksbeoordeling-textarea').getElementsByTagName('textarea')[0].style.height = document.getElementById('textarea-slide').offsetHeight - document.getElementById('btnSendHeight').offsetHeight - document.getElementById('footer-tabs').getElementsByTagName('div')[0].offsetHeight + 'px';
    }
    else if(pageke == 'BeoordelingPage'){
      this.navCtrl.push(BeoordelingPage)
    }
  }
}
