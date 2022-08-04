import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPdfMakeComponent } from './html-pdf-make.component';

describe('HtmlPdfMakeComponent', () => {
  let component: HtmlPdfMakeComponent;
  let fixture: ComponentFixture<HtmlPdfMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPdfMakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPdfMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
