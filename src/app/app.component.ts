import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
declare var require: any;
const htmlToPdfmake = require('html-to-pdfmake');
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  htmlString: string = '';

  constructor() {}

  save() {
    const preview = document.getElementById('preview');
    if (preview) preview.innerHTML = this.htmlString;
  }

  showPdf() {
    const printPreview = document.getElementById(
      'printPreview'
    ) as HTMLIFrameElement;
    var html = htmlToPdfmake(this.htmlString);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).getBase64(
      function (encodedString: any) {
        printPreview.src = 'data:application/pdf;base64,' + encodedString;
      }.bind(this)
    );
  }
}
