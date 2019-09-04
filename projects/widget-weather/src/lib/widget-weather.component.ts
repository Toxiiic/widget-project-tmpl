import { Component, OnInit, Input } from '@angular/core';
import { Widget, WidgetBase } from '@widget/manifest';
import { HttpClient } from '@angular/common/http';

@Widget({ name: "weather" })
@Component({
  selector: 'lib-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss']
})
export class WidgetWeatherComponent extends WidgetBase {

  cityName: string = 'jinan'

  temperature = '20'
  weather = ''
  windPower = ''
  windDir = ''
  humidity = ''
  feelTemp = ''
  date = ''

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  ngOnInit() {
    this.renderData()
  }

  onResized() { }

  renderData() {
    this.http.get(`weather-api/wmaps/xml/${this.cityName}.xml`, { responseType: 'text' }).subscribe(res => {
      let xmlDoc = this.createXmlDoc(res)
      console.log(xmlDoc.querySelectorAll('city')[0])
      let cityEle = xmlDoc.querySelectorAll('city')[0]
      this.temperature = cityEle.getAttribute('temNow')
      this.weather = cityEle.getAttribute('stateDetailed')
      this.windPower = cityEle.getAttribute('windPower')
      this.windDir = cityEle.getAttribute('windDir')
      this.humidity = cityEle.getAttribute('humidity')
      this.feelTemp = String(parseInt(this.temperature) + Math.floor(Math.random()*2))
      this.date = new Date().toDateString()
    })
  }

  createXmlDoc(xmlText: string) {
    let xmlDoc
    // try { //Internet Explorer
    //   xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //   xmlDoc.async = "false";
    //   xmlDoc.loadXML(xmlText);
    // } catch (e) {
      try { //Firefox, Mozilla, Opera, etc.
        let parser = new DOMParser();
        return xmlDoc = parser.parseFromString(xmlText, "text/xml");
      }
      catch (e) { alert(e.message) }
    // }
    // try {
    //   document.write("xmlDoc 已加载，可以使用。");
    // }
    // catch (e) { alert(e.message) }
  }
}
