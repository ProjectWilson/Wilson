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
          if(id.datum == null)
          {
              let date = new Date;
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();
              let datum = year + '-' + month + '-' + day;

              this.todo['datum'] = datum;
              console.log(1);
          }
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
                  doc.triangle(60, 100, 60, 120, 80, 110, 'FD');

                  doc.setLineWidth(1);
                  doc.setDrawColor(255,0,0);
                  doc.setFillColor(0,0,255);
                  doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
          doc.save('Test.pdf');
      }
}
