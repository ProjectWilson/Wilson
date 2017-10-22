import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import jsPDF from 'jspdf'
declare let jsPDF;

export interface gesprekforms {
  beoordeling: string;
  bpvbedrijf: string;
  bpvdocent: string;
  datum: string;
  naam: string;
  praktijkopleider: string;
}

@Component({
  selector: 'page-form',
  templateUrl: 'gesprekDB.html'
})

export class FormDBPage {

	forms: FirebaseListObservable<any>;
  formsCollectionRef: AngularFirestoreCollection<gesprekforms>;
  form$: Observable<gesprekforms[]>;

  constructor(public navCtrl: NavController, af: AngularFireDatabase, private alertCtrl: AlertController, public afs: AngularFirestore) {
	   this.forms = af.list('/gesprekforms');
     this.formsCollectionRef = this.afs.collection<gesprekforms>('gesprekforms');
     this.form$ = this.formsCollectionRef.snapshotChanges().map(actions => {
       return actions.map(action => {
         const data = action.payload.doc.data() as gesprekforms;
         const id = action.payload.doc.id;
         return { id, ...data };
       });
     });

  }

  gesprek = {}
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
              this.forms.push(this.gesprek);
          }
          else{
            this.presentAlert();
          }
      }

  public download(id) {
          console.log(id.naam);

          let pageWidth = 8.5,
          lineHeight = 1.2,
          margin = 0.5,
          maxLineWidth = pageWidth - margin * 2,
          fontSize = 14,
          ptsPerInch = 72,
          oneLineHeight = fontSize * lineHeight / ptsPerInch,
          text = 'Naam: \n' + id.naam + '\n\n' +
              'BPV Docent: \n' + id.bpvdocent + '\n\n' +
              'BPV Bedrijf: \n' + id.bpvbedrijf + '\n\n' +
              'Praktijkopleider: \n' + id.praktijkopleider + '\n\n' +
              'Datum: \n' + id.datum + '\n\n' +
              'Beoordeling: \n' + id.beoordeling + '\n\n';

          let doc = new jsPDF({
              unit: 'in',
              lineHeight: lineHeight
            }).setProperties({ title: 'Gespreksformulier' });

          let textLines = doc
              .setFont('helvetica', 'neue')
              .setFontSize(fontSize)
              .splitTextToSize(text, maxLineWidth);

          //Create de tekst en pdf format
          doc.text(textLines, margin, margin + 2 * oneLineHeight);

          let textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
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
