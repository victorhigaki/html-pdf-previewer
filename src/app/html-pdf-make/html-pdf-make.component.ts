import { Component, Input, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
declare var require: any;
const htmlToPdfmake = require('html-to-pdfmake');
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-html-pdf-make',
  templateUrl: './html-pdf-make.component.html',
  styleUrls: ['./html-pdf-make.component.css'],
})
export class HtmlPdfMakeComponent implements OnInit {
  @Input()
  htmlString: string = '';

  constructor() {}

  ngOnInit(): void {}

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
