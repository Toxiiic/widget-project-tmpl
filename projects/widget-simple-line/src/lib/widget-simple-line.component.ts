
import { Component, OnInit, ViewChild, Input, ViewContainerRef, ElementRef } from '@angular/core';
import "echarts";
import * as echarts from 'echarts';
import { Widget, WidgetBase, Property, PropertyTypes } from '@widget/devkit';

@Widget({ name:"simple-line" })
@Component({
  selector: 'widget-simple-line',
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
export class WidgetSimpleLineComponent extends WidgetBase {
  @Property({
    type: PropertyTypes.Color,
    colorOption: {
      default: '#2AC6C6',
      type: 'hex'
    },
    isArray: false
  }) mainColor = "#2AC6C6"
  @Property() tooltipPrefix: string = ""
  @Property() tooltipSuffix: string = ""

  chartInstance: echarts.ECharts;

  @ViewChild("chart") chartContainer:ElementRef;
  
  constructor() {
    super()
    console.log(this)
  }

  ngOnInit() {
    console.log("view init",this.chartContainer);
    this.chartInstance = echarts.init(this.chartContainer.nativeElement);
    this.setChartOption()
  }
  ngAfterViewInit() {
    this.chartInstance.resize();
  }
  onResized(){
    this.chartInstance.resize();
  }

  setChartOption () {
    this.chartInstance.setOption(getChartOption(
      this.mainColor,
      this.tooltipPrefix,
      this.tooltipSuffix
    ))
  }
}


function getChartOption (mainColor: string,
    tooltipPrefix: string,
    tooltipSuffix: string,
  ) {
  return {
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
            color: `${mainColor}21`
          }
        },
        backgroundColor: '#00000000',
        textStyle: {
            color: mainColor,
            fontSize: 25,
            fontWeight: 'bold',
            
        },
        formatter: `<div style="font-size:15px;font-weight:normal;line-height: 1.5;">{b}</div>
          ${tooltipPrefix}{c}${tooltipSuffix}`,
        extraCssText: 'text-align:center;transform:translateX(-50%);z-index:10;'
    },
    series: [{
        data: [45, 49, 36, 43, 62, 68, 69],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        areaStyle: {
            color: `${mainColor}7a`
        },
        lineStyle: {
            color: mainColor
        },
        itemStyle: {
            color: mainColor
        }
    }],
    grid: {
        left: 0,
        top: 20,
        right: 0,
        bottom: 0
    },
    textStyle: {
        color: mainColor
    }
  } as echarts.EChartOption
}