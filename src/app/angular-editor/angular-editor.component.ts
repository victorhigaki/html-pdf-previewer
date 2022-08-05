import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-angular-editor',
  templateUrl: './angular-editor.component.html',
  styleUrls: ['./angular-editor.component.css'],
})
export class AngularEditorComponent implements OnInit {
  @Input()
  value = '';
  @Output() valueChange = new EventEmitter();

  form?: FormGroup;

  editorConfig: AngularEditorConfig = {
    editable: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      teste: [''],
    });
  }
}
