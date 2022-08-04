import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  htmlString = '';

  constructor() {}

  save() {
    const preview = document.getElementById('preview');
    if (preview) preview.innerHTML = this.htmlString;
  }
}
