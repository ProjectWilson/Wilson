import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
    selector: 'page-form',
    templateUrl: 'form.html'
})

export class FormPage {

    forms: FirebaseListObservable<any>;
    gebruikers: FirebaseListObservable<any>;
    @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController) {
        this.forms = af.list('/gesprekforms');
        this.gebruikers = af.list('/gebruikers');
    }

    radioValue(value) {
        this.gesprek['BblOrBol'] = value;
    }

    studentenlijst = {
            'studentnummer': '',
            'roepnaam': '',
            'voorvoegsel': '',
            'achternaam': '',
            'telefoon': '',
            'woonplaats': '',
            'opleiding': '',
            'email': '',
            'praktijkopleider': '',
            'bedrijf': '',
            'bpvtelefoon': '',
            'bpvbegeleider': ''
        };

        StudentnummerInput;
        autofill(test)
        {
            console.log(test);
            this.gesprek = {
                'naam' : this.studentenlijst.roepnaam + this.studentenlijst.voorvoegsel + this.studentenlijst.achternaam,
                'studentnummer' : this.studentenlijst.studentnummer ,
                'bpvdocent' : this.studentenlijst.bpvbegeleider,
                'bpvbedrijf' : this.studentenlijst.bedrijf,
                'praktijkopleider' : this.studentenlijst.praktijkopleider
            };
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
        document.getElementById('gespreksbeoordeling-textarea').getElementsByTagName('textarea')[0].style.height = document.getElementById('textarea-slide').offsetHeight - document.getElementById('btnSendHeight').offsetHeight - document.getElementById('footer-tabs').getElementsByTagName('div')[0].offsetHeight + 'px';
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
