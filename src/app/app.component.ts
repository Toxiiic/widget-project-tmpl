import { Component, OnInit } from '@angular/core';
import { AComponent } from 'projects/a/src/public-api';
import { paramCase } from 'change-case'
import { WidgetContainerComponent } from '@gspwidget/widget-core/lib/widget-container/widget-container.component';

window['DashboardApi'] = {
}

const WIDGET_COMPONENTS = [ AComponent ]
const PROP_VALUES_STORAGE_KEY = 'PROP_VALUES'

@Component({
  selector: 'eg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'widget-examples';
  widgets = null

  ngOnInit () {
    let propValues = localStorage.getItem(PROP_VALUES_STORAGE_KEY) || {
      AComponent: {
        xField: 'month',
        yFieldObjs: [{
          valueField: 'totalSale', color: '#1f9cfe'
        }, {
          valueField: 'lastYear', color: '#ff7ccd'
        }]
      }
    }
    this.widgets = WIDGET_COMPONENTS.map(widgetComponent => {
      return {
        widgetInfo: {
          widgetComponent: widgetComponent,
          name: paramCase(widgetComponent.name).replace('-component', '')
        },
        propValues: propValues[widgetComponent.name]
      }
    })
  }
  
  handleTriggerLoadData (wc: WidgetContainerComponent, widget, e) {
    console.log(wc)
    setTimeout(() => {
      wc.onGetData([
        { "month": "1月", "totalSale": 100, "lastYear": 120, "area1": 450, "area2": 90, "area3": 60 },
        { "month": "2月", "totalSale": 300, "lastYear": 220, "area1": 280, "area2": 70, "area3": 70 },
        { "month": "3月", "totalSale": 400, "lastYear": 380, "area1": 130, "area2": 90, "area3": 80 },
        { "month": "4月", "totalSale": 300, "lastYear": 420, "area1": 180, "area2": 75, "area3": 75 },
        { "month": "5月", "totalSale": 500, "lastYear": 290, "area1": 300, "area2": 100, "area3": 60 },
        { "month": "6月", "totalSale": 200, "lastYear": 350, "area1": 80, "area2": 60, "area3": 64 },
        { "month": "7月", "totalSale": 400, "lastYear": 220, "area1": 280, "area2": 60, "area3": 72 }
      ])
    }, 10)
  }
}
