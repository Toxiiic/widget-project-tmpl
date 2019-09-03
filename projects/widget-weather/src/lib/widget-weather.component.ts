import { Component, OnInit, Input } from '@angular/core';
import { Widget, WidgetBase } from '@widget/manifest';
import { HttpClient } from '@angular/common/http';

@Widget({name:"weather"})
@Component({
  selector: 'lib-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss']
})
export class WidgetWeatherComponent extends WidgetBase {



  constructor(
    private http: HttpClient
  ) {
    super()
  }

  ngOnInit() {
    this.renderData()
  }

  onResized () {}

  renderData () {
    this.http.get(`weather-api/wmaps/xml/jinan.xml`, { responseType: 'text' }).subscribe(res => {
      console.log(res)
    })
  

  }
}
