import { Component, OnInit } from '@angular/core';
import { Widget } from '@widget/manifest';
import { WidgetComponent } from 'src/widget.interface';

@Widget({name:"weather"})
@Component({
  selector: 'lib-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss']
})
export class WidgetWeatherComponent implements OnInit, WidgetComponent {

  constructor() { }

  ngOnInit() {
  }

  onResized () {}

}
