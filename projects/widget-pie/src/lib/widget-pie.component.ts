
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
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8'],
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
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
  } as echarts.EChartOption
}