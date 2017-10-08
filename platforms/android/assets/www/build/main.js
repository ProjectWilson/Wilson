webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormPage = (function () {
    function FormPage(navCtrl, af, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.gesprek = {};
        this.forms = af.list('/gesprekforms');
    }
    FormPage.prototype.logForm = function (id) {
        if (id.datum == null) {
            var date = new Date;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var datum = year + '-' + month + '-' + day;
            this.gesprek['datum'] = datum;
            console.log(1);
        }
        if (id.akkoord == true) {
            this.forms.push(this.gesprek);
        }
        else {
            this.presentAlert();
        }
    };
    FormPage.prototype.download = function (id) {
        console.log(id.naam);
        var pageWidth = 8.5, lineHeight = 1.2, margin = 0.5, maxLineWidth = pageWidth - margin * 2, fontSize = 14, ptsPerInch = 72, oneLineHeight = fontSize * lineHeight / ptsPerInch, text = 'Naam: \n' + id.naam + '\n\n' +
            'BPV Docent: \n' + id.bpvdocent + '\n\n' +
            'BPV Bedrijf: \n' + id.bpvbedrijf + '\n\n' +
            'Praktijkopleider: \n' + id.praktijkopleider + '\n\n' +
            'Datum: \n' + id.datum + '\n\n' +
            'Beoordeling: \n' + id.beoordeling + '\n\n';
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf___default.a({
            unit: 'in',
            lineHeight: lineHeight
        }).setProperties({ title: 'Gespreksformulier' });
        var textLines = doc
            .setFont('helvetica', 'neue')
            .setFontSize(fontSize)
            .splitTextToSize(text, maxLineWidth);
        //Create de tekst en pdf format
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        var textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
        doc
            .setFontStyle('bold')
            .text('Gespreksformulier:', margin, margin + oneLineHeight);
        //maakt rectangles
        doc.setLineWidth(0);
        doc.rect(margin, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Student', margin, textHeight + 2.5);
        doc.rect(margin + 4, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Begeleider', margin + 4, textHeight + 2.5);
        doc.save('Test.pdf');
    };
    FormPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Akkoord',
            subTitle: 'Ga akkoord met het formulier',
            buttons: ['Sluit']
        });
        alert.present();
    };
    return FormPage;
}());
FormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"c:\Ionic\Wilson\src\pages\form\form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Gespreksformulier.\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="logForm(gesprek)">\n\n      <ion-item>\n\n        <ion-label floating>Naam Student</ion-label>\n\n        <ion-input type="text" [(ngModel)]="gesprek.naam" name="naam"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>BPV Docent</ion-label>\n\n        <ion-input type="text" [(ngModel)]="gesprek.bpvdocent" name="bpvdocent"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>BPV Bedrijf</ion-label>\n\n        <ion-input type="text" [(ngModel)]="gesprek.bpvbedrijf" name="bpvbedrijf"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Praktijkopleider</ion-label>\n\n        <ion-input type="text" [(ngModel)]="gesprek.praktijkopleider" name="praktijkopleider"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Beoordeling</ion-label>\n\n        <ion-textarea [(ngModel)]="gesprek.beoordeling" name="beoordeling"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Datum</ion-label>\n\n        <ion-input type="date" [(ngModel)]="gesprek.datum" name="datum"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-label>Akkoord</ion-label>\n\n        <ion-checkbox [(ngModel)]="gesprek.akkoord" name="akkoord"></ion-checkbox>\n\n      </ion-item>\n\n      <button ion-button type="submit" block>Upload Gespreksformulier&nbsp;<ion-icon name=\'add-circle\'></ion-icon></button>\n\n    </form>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let form of forms | async">\n\n        Studentnaam: {{form.naam}} <button ion-button id=\'exportButton\' (click)=\'download(form)\' large>Export&nbsp;<ion-icon name=\'download\'></ion-icon></button>\n\n        <br />\n\n        BPV Docent: {{form.bpvdocent}}\n\n        <br />\n\n        BPV Bedrijf: {{form.bpvbedrijf}}\n\n        <br />\n\n        Praktijkopleider: {{form.praktijkopleider}}\n\n        <br />\n\n        Beoordeling: {{form.beoordeling}}\n\n        <br />\n\n        Datum: {{form.datum}}\n\n        </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\pages\form\form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeoordelingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BeoordelingPage = (function () {
    function BeoordelingPage(navCtrl, af, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.rate = {};
        this.forms = af.list('/beoordeelforms');
    }
    BeoordelingPage.prototype.initialSchijt = function () {
        console.log('test');
    };
    BeoordelingPage.prototype.submitForm = function (id) {
        if (id.datum == null) {
            var date = new Date;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var datum = year + '-' + month + '-' + day;
            this.rate['datum'] = datum;
            console.log(1);
        }
        if (id.akkoord == true) {
            console.log(this.rate);
            this.forms.push(this.rate);
        }
        else {
            this.presentAlert();
        }
    };
    BeoordelingPage.prototype.download = function (id) {
        console.log(id.naam);
        var pageWidth = 8.5, lineHeight = 1.2, margin = 0.5, maxLineWidth = pageWidth - margin * 2, fontSize = 14, ptsPerInch = 72, oneLineHeight = fontSize * lineHeight / ptsPerInch, text = 'Naam: \n' + id.naam + '\n\n' +
            'BPV Docent: \n' + id.bpvdocent + '\n\n' +
            'BPV Bedrijf: \n' + id.bpvbedrijf + '\n\n' +
            'Praktijkopleider: \n' + id.praktijkopleider + '\n\n' +
            'Datum: \n' + id.datum + '\n\n' +
            'Beoordeling: \n' + id.beoordeling + '\n\n';
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf___default.a({
            unit: 'in',
            lineHeight: lineHeight
        }).setProperties({ title: 'Gespreksformulier' });
        var textLines = doc
            .setFont('helvetica', 'neue')
            .setFontSize(fontSize)
            .splitTextToSize(text, maxLineWidth);
        //Create de tekst en pdf format
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        var textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
        doc
            .setFontStyle('bold')
            .text('Gespreksformulier:', margin, margin + oneLineHeight);
        //maakt rectangles
        doc.setLineWidth(0);
        doc.rect(margin, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Student', margin, textHeight + 2.5);
        doc.rect(margin + 4, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Begeleider', margin + 4, textHeight + 2.5);
        doc.save('Test.pdf');
    };
    BeoordelingPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Akkoord',
            subTitle: 'Ga akkoord met het formulier',
            buttons: ['Sluit']
        });
        alert.present();
    };
    BeoordelingPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        var isBeg = this.slides.isBeginning();
        var isEnd = this.slides.isEnd();
        console.log(isEnd);
        console.log('Current index is', currentIndex);
        if (isBeg === true) {
            document.getElementById('backButton').style.visibility = 'hidden';
            console.log('is begin');
        }
        else if (isEnd === true) {
            document.getElementById('forwardButton').style.visibility = 'hidden';
            console.log('is einde');
        }
        else {
            document.getElementById('backButton').style.visibility = 'visible';
            document.getElementById('forwardButton').style.visibility = 'visible';
        }
    };
    BeoordelingPage.prototype.vorigeSlide = function () {
        this.slides.lockSwipeToPrev(false);
        this.slides.slidePrev(200, true);
        this.slides.lockSwipeToPrev(true);
    };
    BeoordelingPage.prototype.nextSlide = function () {
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext(200, true);
        this.slides.lockSwipeToNext(true);
    };
    return BeoordelingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */])
], BeoordelingPage.prototype, "slides", void 0);
BeoordelingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beoordeling',template:/*ion-inline-start:"c:\Ionic\Wilson\src\pages\beoordeling\beoordeling.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Beoordelingsformulier.\n\n      <button id=\'backButton\' ion-button (click)="vorigeSlide()"><ion-icon name=\'arrow-back\'></ion-icon>&nbsp; Vorige</button>\n\n      <button id=\'forwardButton\' ion-button (click)="nextSlide()">Volgende &nbsp;<ion-icon name=\'arrow-forward\'></ion-icon></button>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<body onload=\'initialSchijt()\'>\n\n\n\n</body>\n\n<ion-slides (ionSlideDidChange)="slideChanged()">\n\n  <ion-slide>\n\n    <form (ngSubmit)="submitForm(rate)">\n\n        <ion-item>\n\n          <ion-label floating>Naam Student</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.naam" name="naam"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Studentnummer</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.studentnummer" name="studentnummer"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Klas</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.klas" name="klas"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>BPV Docent</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.bpvdocent" name="bpvdocent"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>BPV Bedrijf</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.bpvbedrijf" name="bpvbedrijf"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Telefoon BPV Docent</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.telbpvdocent" name="telbpvdocent"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Praktijkopleider</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.praktijkopleider" name="praktijkopleider"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Telefoon Praktijkopleider</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.telpraktijkopleider" name="telpraktijkopleider"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Email Praktijkopleider</ion-label>\n\n          <ion-input type="text" [(ngModel)]="rate.emailpraktijkopleider" name="emailpraktijkopleider"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Datum</ion-label>\n\n          <ion-input type="date" [(ngModel)]="rate.datum" name="datum"></ion-input>\n\n          </ion-item>\n\n      </form>\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <h1>Technische aspecten</h1>\n\n    <ion-item>\n\n      <ion-label>Voorbereiding werkzaamheden</ion-label>\n\n      <ion-select [(ngModel)]="rate.vraag1" name="vraag1" multiple="false" interface="action-sheet">\n\n        <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n        <ion-option value="Voldoende">Voldoende</ion-option>\n\n        <ion-option value="Goed">Goed</ion-option>\n\n        <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Plannen en organiseren werkzaamheden</ion-label>\n\n      <ion-select [(ngModel)]="rate.vraag2" name="vraag2" interface="popover">\n\n        <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n        <ion-option value="Voldoende">Voldoende</ion-option>\n\n        <ion-option value="Goed">Goed</ion-option>\n\n        <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Gebruik materiaal en gereedschap</ion-label>\n\n      <ion-select [(ngModel)]="rate.vraag3" name="vraag3" multiple="false" interface="popover">\n\n        <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n        <ion-option value="Voldoende">Voldoende</ion-option>\n\n        <ion-option value="Goed">Goed</ion-option>\n\n        <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Gebruik meetapparatuur</ion-label>\n\n    <ion-select [(ngModel)]="rate.vraag4" name="vraag4" multiple="false" interface="popover">\n\n      <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n      <ion-option value="Voldoende">Voldoende</ion-option>\n\n      <ion-option value="Goed">Goed</ion-option>\n\n      <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n  <ion-label>Tekeninglezen</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag5" name="vraag5" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Ontwerpen / aanpassen schakelingen</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag6" name="vraag6" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Ontwerpen / aanpassen installaties</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag7" name="vraag7" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Ontwerpen / aanpassen tekeningen</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag8" name="vraag8" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Kostenberekening maken</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag9" name="vraag9" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Theoretisch inzicht</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag10" name="vraag10" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Technisch inzicht</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag11" name="vraag11" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Kwaliteit geleverde werk</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag12" name="vraag12" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Rapporteren werkzaamheden</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag13" name="vraag13" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Houdt zich aan bedrijfsregels</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag14" name="vraag14" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Houdt zich aan ARBO-regels</ion-label>\n\n  <ion-select [(ngModel)]="rate.vraag15" name="vraag15" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n Opmerking en/of aandachtspunten met betrekking tot de technische aspecten:\n\n<ion-item>\n\n  <ion-label >Opmerking en/of aandachtspunten</ion-label>\n\n  <ion-textarea [(ngModel)]="rate.opmerkingTech" name="opmerkingTech"></ion-textarea>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Beoordeling technische aspecten</ion-label>\n\n  <ion-select [(ngModel)]="rate.rate1" name="rate1" multiple="false" interface="popover">\n\n    <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n    <ion-option value="Voldoende">Voldoende</ion-option>\n\n    <ion-option value="Goed">Goed</ion-option>\n\n    <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n</ion-slide>\n\n  <ion-slide>\n\n    <form (ngSubmit)="submitForm(rate)">\n\n    <ion-list>\n\n      <h1>Houdingsaspecten</h1>\n\n      <ion-item>\n\n        <ion-label>Verloop eerste contacten bedrijf</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag16" name="vraag16" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Houding ten aanzien van collega’s</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag17" name="vraag17" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Houding ten aanzien van leidinggevenden</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag18" name="vraag18" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Houding ten aanzien van klanten</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag19" name="vraag19" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Omgaan met kritiek</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag20" name="vraag20" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Komt op tijd</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag21" name="vraag21" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Toont eigen initiatief</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag22" name="vraag22" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Inzet</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag23" name="vraag23" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Toont belangstelling voor het vak</ion-label>\n\n        <ion-select [(ngModel)]="rate.vraag24" name="vraag24" multiple="false" interface="popover">\n\n          <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n          <ion-option value="Voldoende">Voldoende</ion-option>\n\n          <ion-option value="Goed">Goed</ion-option>\n\n          <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n    Opmerking en/of aandachtspunten met betrekking tot de houdingsaspecten:\n\n   <ion-item>\n\n     <ion-label >Opmerking en/of aandachtspunten</ion-label>\n\n     <ion-textarea [(ngModel)]="rate.opmerkingHouding" name="opmerkingHouding"></ion-textarea>\n\n   </ion-item>\n\n   <ion-item>\n\n     <ion-label>Beoordeling houdingsaspecten</ion-label>\n\n     <ion-select [(ngModel)]="rate.rate2" name="rate2" multiple="false" interface="popover">\n\n       <ion-option value="Onvoldoende">Onvoldoende</ion-option>\n\n       <ion-option value="Voldoende">Voldoende</ion-option>\n\n       <ion-option value="Goed">Goed</ion-option>\n\n       <ion-option value="N.v.t.">N.v.t.</ion-option>\n\n     </ion-select>\n\n   </ion-item>\n\n   <ion-item>\n\n     <ion-label>Akkoord/Handtekening</ion-label>\n\n     <ion-checkbox [(ngModel)]="rate.akkoord" name="akkoord"></ion-checkbox>\n\n   </ion-item>\n\n   <button ion-button type="submit" block>Upload beoordelingsformulier&nbsp;<ion-icon name=\'add-circle\'></ion-icon></button>\n\n  </form>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\pages\beoordeling\beoordeling.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], BeoordelingPage);

//# sourceMappingURL=beoordeling.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gesprekDB_gesprekDB__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beoordeling_beoordeling__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beoordelingDB_beoordelingDB__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__form_form__["a" /* FormPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__gesprekDB_gesprekDB__["a" /* FormDBPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__beoordeling_beoordeling__["a" /* BeoordelingPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__beoordelingDB_beoordelingDB__["a" /* BeoordelingDBPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Ionic\Wilson\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Gespreksformulier" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Gesprekken" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Beoordelingsformulier" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Beoordelingen" tabIcon="clipboard"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beoordeling_beoordeling__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.linkPage = function (pageke) {
        console.log(pageke);
        if (pageke == 'FormPage') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__form_form__["a" /* FormPage */]);
        }
        else if (pageke == 'BeoordelingPage') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__beoordeling_beoordeling__["a" /* BeoordelingPage */]);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"c:\Ionic\Wilson\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Project Wilson\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <button class=\'navButtonke\' ion-button large (click)="linkPage(\'FormPage\')">Gespreksformulier</button>\n\n  <button class=\'navButtonke\' ion-button large (click)="linkPage(\'BeoordelingPage\')">Beoordelingsformulier</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormDBPage = (function () {
    function FormDBPage(navCtrl, af, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.gesprek = {};
        this.forms = af.list('/gesprekforms');
    }
    FormDBPage.prototype.logForm = function (id) {
        if (id.datum == null) {
            var date = new Date;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var datum = year + '-' + month + '-' + day;
            this.gesprek['datum'] = datum;
            console.log(1);
        }
        if (id.akkoord == true) {
            this.forms.push(this.gesprek);
        }
        else {
            this.presentAlert();
        }
    };
    FormDBPage.prototype.download = function (id) {
        console.log(id.naam);
        var pageWidth = 8.5, lineHeight = 1.2, margin = 0.5, maxLineWidth = pageWidth - margin * 2, fontSize = 14, ptsPerInch = 72, oneLineHeight = fontSize * lineHeight / ptsPerInch, text = 'Naam: \n' + id.naam + '\n\n' +
            'BPV Docent: \n' + id.bpvdocent + '\n\n' +
            'BPV Bedrijf: \n' + id.bpvbedrijf + '\n\n' +
            'Praktijkopleider: \n' + id.praktijkopleider + '\n\n' +
            'Datum: \n' + id.datum + '\n\n' +
            'Beoordeling: \n' + id.beoordeling + '\n\n';
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf___default.a({
            unit: 'in',
            lineHeight: lineHeight
        }).setProperties({ title: 'Gespreksformulier' });
        var textLines = doc
            .setFont('helvetica', 'neue')
            .setFontSize(fontSize)
            .splitTextToSize(text, maxLineWidth);
        //Create de tekst en pdf format
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        var textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
        doc
            .setFontStyle('bold')
            .text('Gespreksformulier:', margin, margin + oneLineHeight);
        //maakt rectangles
        doc.setLineWidth(0);
        doc.rect(margin, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Student', margin, textHeight + 2.5);
        doc.rect(margin + 4, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Begeleider', margin + 4, textHeight + 2.5);
        doc.save('Test.pdf');
    };
    FormDBPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Akkoord',
            subTitle: 'Ga akkoord met het formulier',
            buttons: ['Sluit']
        });
        alert.present();
    };
    return FormDBPage;
}());
FormDBPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"c:\Ionic\Wilson\src\pages\gesprekDB\gesprekDB.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Gespreksformulier.\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let form of forms | async">\n\n        Studentnaam: {{form.naam}} <button ion-button id=\'exportButton\' (click)=\'download(form)\' large>Export&nbsp;<ion-icon name=\'download\'></ion-icon></button>\n\n        <br />\n\n        BPV Docent: {{form.bpvdocent}}\n\n        <br />\n\n        BPV Bedrijf: {{form.bpvbedrijf}}\n\n        <br />\n\n        Praktijkopleider: {{form.praktijkopleider}}\n\n        <br />\n\n        Beoordeling: {{form.beoordeling}}\n\n        <br />\n\n        Datum: {{form.datum}}\n\n        </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\pages\gesprekDB\gesprekDB.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FormDBPage);

//# sourceMappingURL=gesprekDB.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeoordelingDBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeoordelingDBPage = (function () {
    function BeoordelingDBPage(navCtrl, af, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.gesprek = {};
        this.forms = af.list('/beoordeelforms');
    }
    BeoordelingDBPage.prototype.logForm = function (id) {
        if (id.datum == null) {
            var date = new Date;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var datum = year + '-' + month + '-' + day;
            this.gesprek['datum'] = datum;
            console.log(1);
        }
        if (id.akkoord == true) {
            this.forms.push(this.gesprek);
        }
        else {
            this.presentAlert();
        }
    };
    BeoordelingDBPage.prototype.download = function (id) {
        console.log(id.naam);
        var pageWidth = 8.5, lineHeight = 1.2, margin = 0.5, maxLineWidth = pageWidth - margin * 2, fontSize = 14, ptsPerInch = 72, oneLineHeight = fontSize * lineHeight / ptsPerInch, text = 'Naam: \n' + id.naam + '\n\n' +
            'BPV Docent: \n' + id.bpvdocent + '\n\n' +
            'BPV Bedrijf: \n' + id.bpvbedrijf + '\n\n' +
            'Praktijkopleider: \n' + id.praktijkopleider + '\n\n' +
            'Datum: \n' + id.datum + '\n\n' +
            'Beoordeling: \n' + id.beoordeling + '\n\n';
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf___default.a({
            unit: 'in',
            lineHeight: lineHeight
        }).setProperties({ title: 'Gespreksformulier' });
        var textLines = doc
            .setFont('helvetica', 'neue')
            .setFontSize(fontSize)
            .splitTextToSize(text, maxLineWidth);
        //Create de tekst en pdf format
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        var textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
        doc
            .setFontStyle('bold')
            .text('Gespreksformulier:', margin, margin + oneLineHeight);
        //maakt rectangles
        doc.setLineWidth(0);
        doc.rect(margin, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Student', margin, textHeight + 2.5);
        doc.rect(margin + 4, textHeight + 3, 3, oneLineHeight + 1);
        doc.text('Handtekening Begeleider', margin + 4, textHeight + 2.5);
        doc.save('Test.pdf');
    };
    BeoordelingDBPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Akkoord',
            subTitle: 'Ga akkoord met het formulier',
            buttons: ['Sluit']
        });
        alert.present();
    };
    return BeoordelingDBPage;
}());
BeoordelingDBPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"c:\Ionic\Wilson\src\pages\beoordelingDB\beoordelingDB.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Gespreksformulier.\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let form of forms | async">\n\n      <button ion-button id=\'exportButton\' (click)=\'download(form)\' large>Export&nbsp;<ion-icon name=\'download\'></ion-icon></button>\n\n        <table>\n\n        <tr>\n\n          <th>Studentgegevens</th>\n\n        </tr>\n\n        <tr>\n\n          <td>Studentnaam: </td><td>{{form.naam}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Studentnummer: </td><td>{{form.studentnummer}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Klas: </td><td>{{form.klas}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>BPV Docent: </td><td>{{form.bpvdocent}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>BPV Bedrijf: </td><td>{{form.bpvbedrijf}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Telefoon BPV:  </td><td>{{form.telbpvdocent}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Praktijkopleider</td><td>{{form.praktijkopleider}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Telefoon Praktijkopleider </td><td>{{form.telpraktijkopleider}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Email Praktijkopleider</td><td>{{form.emailpraktijkopleider}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Datum: </td><td>{{form.datum}}</td>\n\n        </tr>\n\n\n\n\n\n\n\n        <tr>\n\n        <th>Technische Aspecten</th>\n\n        </tr>\n\n        <tr>\n\n          <td>1.  Voorbereiding werkzaamheden: </td><td>{{form.vraag1}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>2.  Plannen en organiseren werkzaamheden: </td><td>{{form.vraag2}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>3.  Gebruik materiaal en gereedschap: </td><td>{{form.vraag3}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>4.  Gebruik meetapparatuur: </td><td>{{form.vraag4}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>5.  Tekeninglezen: </td><td>{{form.vraag5}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>6.  Ontwerpen / aanpassen tekeningen: </td><td>{{form.vraag6}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>7.  Ontwerpen / aanpassen schakelingen: </td><td>{{form.vraag7}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>8.  Ontwerpen / aanpassen installaties: </td><td>{{form.vraag8}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>9.  Kostenberekening maken: </td><td>{{form.vraag9}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>10. Theoretisch inzicht: </td><td>{{form.vraag10}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>11. Technisch inzicht: </td><td>{{form.vraag11}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>12. Kwaliteit geleverde werk: </td><td>{{form.vraag12}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>13. Rapporteren werkzaamheden: </td><td>{{form.vraag13}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>14. Houdt zich aan de bedrijgsregels: </td><td>{{form.vraag14}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>15.  Houdt zich aan de ARBO-regels: </td><td>{{form.vraag15}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Mogelijke opmerking en/of aandachtspunten: </td><td>{{form.opmerkingTech}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Beoordeling Technische Aspecten:</td><td>{{form.rate1}}</td>\n\n        </tr>\n\n\n\n        <tr>\n\n        <th>Houdingsaspecten</th>\n\n        </tr>\n\n        <tr>\n\n          <td>16. Verloop van eerste contacten bedrijf: </td><td>{{form.vraag16}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>17. Houding ten aanzien van collega\'s:  </td><td>{{form.vraag17}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>18. Houding ten aanzien van leidinggevenden: </td><td>{{form.vraag18}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>19. Houding ten aanzien van klanten: </td><td>{{form.vraag19}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>20. Omgaan met kritiek: </td><td>{{form.vraag20}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>21. Komt op tijd:</td><td>{{form.vraag21}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>22. Toont eigen initiatief:</td><td>{{form.vraag22}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>23. Inzet:  </td><td>{{form.vraag23}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>24. Toont belangstelling voor het vak:  </td><td>{{form.vraag24}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Mogelijke opmerking en/of aandachtspunten: </td><td>{{form.opmerkingHouding}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Beoordeling houdingsaspecten: </td><td>{{form.rate2}}</td>\n\n        </tr>\n\n\n\n        </table>\n\n        <hr />\n\n        </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\pages\beoordelingDB\beoordelingDB.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], BeoordelingDBPage);

//# sourceMappingURL=beoordelingDB.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_form_form__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesprekDB_gesprekDB__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_beoordeling_beoordeling__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_beoordelingDB_beoordelingDB__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import the AF2 Module


//AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyC-GkiU9lfJRwjQ2CwkEvGHde284ktI88o",
    authDomain: "projectwilson-c8f35.firebaseapp.com",
    databaseURL: "https://projectwilson-c8f35.firebaseio.com",
    projectId: "projectwilson-c8f35",
    storageBucket: "projectwilson-c8f35.appspot.com",
    messagingSenderId: "122197997808"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_gesprekDB_gesprekDB__["a" /* FormDBPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_beoordeling_beoordeling__["a" /* BeoordelingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_beoordelingDB_beoordelingDB__["a" /* BeoordelingDBPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_gesprekDB_gesprekDB__["a" /* FormDBPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_beoordeling_beoordeling__["a" /* BeoordelingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_beoordelingDB_beoordelingDB__["a" /* BeoordelingDBPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Ionic\Wilson\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"c:\Ionic\Wilson\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map