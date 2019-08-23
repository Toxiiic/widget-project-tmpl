import { Component, OnInit, Input } from '@angular/core';
import { Widget, WidgetBase } from '@widget/manifest';

@Widget({name:"weather"})
@Component({
  selector: 'lib-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss']
})
export class WidgetWeatherComponent extends WidgetBase {

  constructor() {
    super()
  }

  ngOnInit() {
  }

  onResized () {}

}
