
import { Component, OnInit, ViewChild, Input, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

import "echarts";
import * as echarts from 'echarts';
// declare var echarts1;
import { Widget, WidgetBase, WidgetOptions } from '@widget/manifest';

@Widget({name:"simple-line"})
@Component({
  selector: 'widget-simple-line',
  template: `
  <div class="d-flex flex-column h-100">
    <lib-widget-title-bar
      [title]="option.title"
      [showMore]="false"
      ></lib-widget-title-bar>
    <div id="main" class="flex-fill" #chart>
    </div>
  </div>
  `,
  styles: []
})
export class WidgetSimpleLineComponent extends WidgetBase {
  @Input() option: WidgetOptions
  @Input() mainColor: string = "#2AC6C6"
  @Input() tooltipPrefix: string = ""
  @Input() tooltipSuffix: string = ""

  chartInstance: echarts.ECharts;

  @ViewChild("chart") chartContainer:ElementRef;
  
  constructor(private render2:Renderer2) {
    super()
  }

  ngOnInit() {
    console.log("view init",this.chartContainer);
    this.chartInstance = echarts.init(this.chartContainer.nativeElement);
    this.chartInstance.setOption(this.lineOptions);
  }

  ngAfterViewInit(): void {
    this.chartInstance.setOption(this.lineOptions);
    this.chartInstance.resize();
  }
  onResized(){
    this.chartInstance.resize();
  }

  lineOptions: echarts.EChartOption = {
    xAxis: {
        type: 'category',
        data: ['9/3', '9/4', '9/5', '9/6', '9/7', '9/8', '9/10'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
            show: true,
          lineStyle: {
            color: '#E4EBF0',
            type: 'dashed'
          }
        },
        axisLabel: {
            inside: true
        },
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        show: false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            inside: true
        }

    },
    tooltip: {
        trigger: 'axis',
        position: ['50%', '0%'],
        alwaysShowContent: true,
        axisPointer: {
          lineStyle: {
            color: `${this.mainColor}21`
          }
        },
        backgroundColor: '#00000000',
        textStyle: {
            color: this.mainColor,
            fontSize: 25,
            fontWeight: 'bold',
            
        },
        formatter: `<div style="font-size:15px;font-weight:normal;line-height: 1.5;">{b}</div>
          ${this.tooltipPrefix}{c}fd${this.tooltipSuffix}`,
        extraCssText: 'text-align:center;transform:translateX(-50%);'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        areaStyle: {
            color: `${this.mainColor}7a`
        },
        lineStyle: {
            color: this.mainColor
        },
        itemStyle: {
            color: this.mainColor
        }
    }],
    grid: {
        left: 0,
        top: 20,
        right: 0,
        bottom: 0
    },
    textStyle: {
        color: this.mainColor
    }
  };


}
