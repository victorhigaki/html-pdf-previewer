import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('preview') preview!: ElementRef<HTMLIFrameElement>;
  @Input()
  htmlString: string = '';

  constructor() {}

  ngOnInit(): void {}

  showPdf() {
    const preview = this.preview.nativeElement;
    const html = htmlToPdfmake(this.htmlString);
    const documentDefinition = { content: html };
    const pdf = pdfMake.createPdf(documentDefinition);
    const callback = function (encodedString: string) {
      preview?.setAttribute(
        'src',
        'data:application/pdf;base64,' + encodedString
      );
    };
    pdf.getBase64(callback);
  }
}
