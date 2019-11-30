import { Component } from '@angular/core';
import { AComponent } from 'projects/a/src/public-api';

@Component({
  selector: 'eg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widgetComponents = [
    AComponent
  ]
}
