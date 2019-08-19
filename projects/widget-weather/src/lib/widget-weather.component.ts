import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '@widget/manifest';
import { WidgetComponent, WidgetOptions } from 'src/widget.interface';

@Widget({name:"weather"})
@Component({
  selector: 'lib-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss']
})
export class WidgetWeatherComponent implements OnInit, WidgetComponent {

  @Input() option: WidgetOptions

  constructor() { }

  ngOnInit() {
  }

  onResized () {}

}
