import { Component } from '@angular/core';
import { AComponent } from 'projects/a/src/public-api';
import { of } from 'rxjs';

// TODO: 为了让老数据源写法的 charts 类元部件能够加载到数据，暂时的解决。后期换为 dataEngine 方式
window['DashboardApi'] = {
  storageSvc: {
    getData () {
      return of([
        { "month": "1月", "totalSale": 100, "lastYear": 120, "area1": 450, "area2": 90, "area3": 60 },
        { "month": "2月", "totalSale": 300, "lastYear": 220, "area1": 280, "area2": 70, "area3": 70 },
        { "month": "3月", "totalSale": 400, "lastYear": 380, "area1": 130, "area2": 90, "area3": 80 },
        { "month": "4月", "totalSale": 300, "lastYear": 420, "area1": 180, "area2": 75, "area3": 75 },
        { "month": "5月", "totalSale": 500, "lastYear": 290, "area1": 300, "area2": 100, "area3": 60 },
        { "month": "6月", "totalSale": 200, "lastYear": 350, "area1": 80, "area2": 60, "area3": 64 },
        { "month": "7月", "totalSale": 400, "lastYear": 220, "area1": 280, "area2": 60, "area3": 72 }
      ])
    }
  }
}

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
