import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlPdfMakeModule } from './html-pdf-make/html-pdf-make.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HtmlPdfMakeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
