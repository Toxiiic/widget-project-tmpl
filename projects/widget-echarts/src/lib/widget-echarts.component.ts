import { Component, OnInit, ViewChild, Input, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

import "echarts";
import * as echarts from 'echarts';
// declare var echarts1;
import { Widget, WidgetBase } from '@toxiic/widget-devkit';

@Widget({name:"echarts"})
@Component({
  selector: 'widget-echarts',
  template: `
  <div class="d-flex flex-column h-100">
    <lib-widget-title-bar
      [title]="title"
      [showMore]="false"
      ></lib-widget-title-bar>
    <div id="main" class="flex-fill" #chart>
    </div>
  </div>
  `,
  styles: []
})
export class WidgetEchartsComponent extends WidgetBase {
  @Input() mainColor: string = "#2AC6C6"

  chartInstance: echarts.ECharts;

  @ViewChild("chart") chartContainer:ElementRef;
  
  constructor(private render2:Renderer2) {
    super()
  }

  ngOnInit() {
    console.log("view init",this.chartContainer);
    this.chartInstance = echarts.init(this.chartContainer.nativeElement);
    this.chartInstance.setOption(this.chartOption);
  }
  ngAfterViewInit() {
    this.chartInstance.resize();
  }
  onResized(){
    this.chartInstance.resize();
  }

  chartOption:echarts.EChartOption  = {
      title: {
        show: false
      },
      tooltip: {},
      // legend: {
      //     data:['销量']
      // },
      grid: {
        top: '10%',
        right: '10%',
        bottom: '40',
        left: '35',
      },
      xAxis: {
        data: ["周一","周二","周三","周四","周五","周六","周日", "周一","周二","周三","周四","周五","周六","周日", "周一","周二"],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      },
      yAxis: {
        // axisLabel: {
        //   inside: true
        // },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#E4EBF0',
            type: 'dashed'
          }
        }
      },
      series: [{
          name: '销量',
          type: 'bar',
          data: [27, 45, 60, 50, 45, 51, 56, 65, 67, 80, 90, 87, 80, 72, 65, 62],
          barMaxWidth: 8,
          itemStyle: {
            barBorderRadius: 5,
          }
      }],
      color: ['#5793f3'],
      // textStyle: {
      //   color: '#5793f3'
      // }
  };

}
