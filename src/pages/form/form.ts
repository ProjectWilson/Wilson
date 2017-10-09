import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

// declare var angular: any;

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {

	forms: FirebaseListObservable<any>;
    @ViewChild(Slides) slides: Slides;


    constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController) {
	   this.forms = af.list('/gesprekforms');
        // this.slides.autoHeight = true;
  }

  radioValue(value) {
      this.gesprek['BblOrBol'] = value;
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

        // als op de knop gedrukt word push
        // anders
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

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        let isBeg = this.slides.isBeginning();
        let isEnd = this.slides.isEnd();
        console.log(isBeg);
        console.log('Current index is', currentIndex);
        if(isBeg === true) {
            document.getElementById('backButton').style.visibility = 'hidden';
            document.getElementById('forwardButton').style.visibility = 'visible';
            console.log('is begin');
        }
        else if(isEnd === true) {
            document.getElementById('forwardButton').style.visibility = 'hidden';
            document.getElementById('backButton').style.visibility = 'visible';
            console.log('is einde');
        }
        else {
            document.getElementById('backButton').style.visibility = 'visible';
            document.getElementById('forwardButton').style.visibility = 'visible';
        }

        // nog ff de hoogte van de knop en de footer pakken en die vanaf de slide hoogte aftrekken = textarea hoogte ^^

        // console.log(document.getElementById('gespreksbeoordeling-textarea').getElementsByTagName('textarea')[0].style.height = "500px");
        // console.log(document.getElementById('textarea-slide').offsetHeight);
        //
        // document.getElementById('gespreksbeoordeling-textarea').getElementsByTagName('textarea')[0].style.height = document.getElementById('textarea-slide').offsetHeight + 'px';
        // document.getElementById('gespreksbeoordeling-textarea').childNodes[2].clientHeight = document.body.scrollHeight;

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
}
