import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularEditorComponentModule } from './angular-editor/angular-editor.module';
import { AppComponent } from './app.component';
import { HtmlPdfMakeModule } from './html-pdf-make/html-pdf-make.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HtmlPdfMakeModule,
    AngularEditorComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
