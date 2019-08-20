import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '@widget/manifest';
import { WidgetBase, WidgetOptions } from 'projects/widget-devkit/src/WidgetBase';

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
