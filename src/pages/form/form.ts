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
  logForm(id) {
      if(id.akkoord == true)
      {
         this.forms.push(this.todo);
      }
    }

  public download(id) {
          console.log(id.naam);

          let pageWidth = 8.5,
          lineHeight = 1.2,
          margin = 0.5,
          maxLineWidth = pageWidth - margin * 2,
          fontSize = 24,
          ptsPerInch = 72,
          oneLineHeight = fontSize * lineHeight / ptsPerInch,
          text = 'Naam: \n' + id.naam + '\n' +
              'Beoordeling: \n' + id.beoordeling + '\n';

          let doc = new jsPDF({
              unit: 'in',
              lineHeight: lineHeight
            }).setProperties({ title: 'Beoordelingsformulier' });

          let textLines = doc
              .setFont('helvetica', 'neue')
              .setFontSize(fontSize)
              .splitTextToSize(text, maxLineWidth);

          doc.text(textLines, margin, margin + 2 * oneLineHeight);

          let textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
              doc
                  .setFontStyle('bold')
                  .text('Beoordelingsformulier:', margin, margin + oneLineHeight);

          doc.save('Test.pdf');
      }
}
