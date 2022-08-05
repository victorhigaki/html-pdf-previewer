import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AngularEditorComponent } from './angular-editor.component';

@NgModule({
  declarations: [AngularEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
  ],
  exports: [AngularEditorComponent],
})
export class AngularEditorComponentModule {}
