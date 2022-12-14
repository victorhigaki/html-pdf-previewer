import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEditorComponent } from './angular-editor.component';

describe('RichtextComponent', () => {
  let component: AngularEditorComponent;
  let fixture: ComponentFixture<AngularEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
