import { Component, OnInit, Input } from '@angular/core';
import { Widget, WidgetBase } from '@toxiic/widget-devkit';
import { HttpClient, HttpParams } from '@angular/common/http';

@Widget({ name: "weather" })
@Component({
  selector: 'lib-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss']
})
export class WidgetWeatherComponent extends WidgetBase {

  cityName: string = '济南'

  temperature = '20'
  weather = ''
  windPower = ''
  windDir = ''
  humidity = ''
  feelTemp = ''
  date = ''
  range = ''

  constructor(
    private http: HttpClient
  ) {
    super()
    // if ("geolocation" in navigator) {
    //   /* 地理位置服务可用 */
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position.coords.latitude, position.coords.longitude);
    //   }, err => console.error(err));
    // } else {
    //   /* 地理位置服务不可用 */
    //   console.error('地理位置服务不可用')
    // }
    document.write('<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>')
    // document.write('<script src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script>')
  }

  ngOnInit() {
    // this.renderData()
    setTimeout(() => {
      console.log(window['returnCitySN'])
      let { cid, cname } = window['returnCitySN']
      if((<string>cname).includes('省')) {
        this.cityName = (<string>cname).match(/省\D+市/)[0].slice(1)
      } else {
        this.cityName = cname
      }
      this.renderData()
    }, 1000);
  }

  onResized() { }

  renderData() {
    this.http.jsonp(`http://wthrcdn.etouch.cn/weather_mini?city=${this.cityName}`, 'callback').subscribe(res => {
      console.log(res)
      let { forecast, ganmao, yesterday, wendu } = res['data']
      let today = forecast[0]

      this.temperature = wendu
      this.weather = today.type
      this.windPower = today.fengli.match(/[\d-]+级/)
      this.windDir = today.fengxiang
      this.humidity = '42%'
      this.feelTemp = String(parseInt(this.temperature) + Math.floor(Math.random()*2))
      this.date = today.date
      this.range = `${today.low} ${today.high}`


      // let xmlDoc = this.createXmlDoc(res as string)
      // console.log(xmlDoc.querySelectorAll('city')[0])
      // let cityEle = xmlDoc.querySelectorAll('city')[0]
      // this.temperature = cityEle.getAttribute('temNow')
      // this.weather = cityEle.getAttribute('stateDetailed')
      // this.windPower = cityEle.getAttribute('windPower')
      // this.windDir = cityEle.getAttribute('windDir')
      // this.humidity = cityEle.getAttribute('humidity')
      // this.feelTemp = String(parseInt(this.temperature) + Math.floor(Math.random()*2))
      // this.date = new Date().toDateString()
    })
  }

//   createXmlDoc(xmlText: string) {
//     let xmlDoc
//     // try { //Internet Explorer
//     //   xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//     //   xmlDoc.async = "false";
//     //   xmlDoc.loadXML(xmlText);
//     // } catch (e) {
//       try { //Firefox, Mozilla, Opera, etc.
//         let parser = new DOMParser();
//         return xmlDoc = parser.parseFromString(xmlText, "text/xml");
//       }
//       catch (e) { alert(e.message) }
//     // }
//     // try {
//     //   document.write("xmlDoc 已加载，可以使用。");
//     // }
//     // catch (e) { alert(e.message) }
//   }
}
