
import { Component, OnInit, ViewChild, Input, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import "echarts";
import * as echarts from 'echarts';
import { Widget, WidgetBase } from '@toxiic/widget-devkit';

@Widget({name:"pie"})
@Component({
  selector: 'lib-widget-pie',
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
export class WidgetPieComponent extends WidgetBase {

  chartInstance: echarts.ECharts;

  @ViewChild("chart") chartContainer:ElementRef;
  
  constructor() {
    super()
  }

  ngOnInit() {
    console.log("view init",this.chartContainer);
    this.chartInstance = echarts.init(this.chartContainer.nativeElement, 'light');
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
      // this.mainColor,
      // this.tooltipPrefix,
      // this.tooltipSuffix
    ))
  }
}


function getChartOption (
  // mainColor: string,
  // tooltipPrefix: string,
  // tooltipSuffix: string,
) {
  return {
    tooltip : {
        trigger: 'item',
        formatter: "{b} <br/>{c} ({d}%)"
    },
    legend: {
        x : 'center',
        data:['Edge','IE','Safari','Chrome','Firefox','Opera'],
        bottom: '5',
        itemWidth: 16,
        itemHeight: 10
    },
    calculable : true,
    
    series : [
        {
            name:'面积模式',
            type:'pie',
            label: {
              normal: {
                  position: 'inner',
                  formatter: '{c}',
                  color: '#452c73'
              },
              emphasis: {
                  show: true
              }
            },
            radius : ['35%', '75%'],
            center: ['50%', '40%'],
            data:[
                {value:102, name:'Edge'},
                {value:53, name:'IE'},
                {value:154, name:'Safari'},
                {value:251, name:'Chrome'},
                {value:207, name:'Firefox'},
                {value:351, name:'Opera'}
            ]
        }
    ]
  } as echarts.EChartOption
}