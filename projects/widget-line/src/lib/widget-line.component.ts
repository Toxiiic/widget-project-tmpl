import { Component, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import 'echarts';
import * as echarts from 'echarts';
import { Widget, WidgetBase, Property, PropertyTypes,
  WidgetDataService } from '@gspwidget/widget-devkit';

@Widget({
  name: 'widget-line'
})
@Component({
  selector: 'widget-line',
  template: `
  <div class="d-flex flex-column h-100">
    <lib-widget-title-bar
      [title]="title"
      ></lib-widget-title-bar>
    <div id="main" class="flex-fill" #chart>
    </div>
  </div>
  `,
  styles: []
})
export class WidgetLineComponent extends WidgetBase implements OnInit, AfterViewInit {
  @Property({
    type: PropertyTypes.Bool,
    displayName: '平滑',
    category: '样式',
    boolOption: {
      default: false
    }
  }) smooth: boolean

  @Property({
    category: '数据',
    displayName: 'X轴',
    textOption: {
      default: 'month'
    }
  }) xField: string

  @Property({
    type: PropertyTypes.Object,
    isArray: true,
    displayName: 'Y轴',
    objectOption: {
      default: [{
        valueField: 'totalSale', color: '#1f9cfe'
      }, {
        valueField: 'lastYear', color: '#ff7ccd'
      }],
      objPropertyOptions: [{
        name: 'valueField',
        type: PropertyTypes.Text
      }, {
        name: 'color',
        type: PropertyTypes.Color
      }]
    },
    category: '数据'
  }) yFieldObjs: { valueField: string, color: string }[]

  chartInstance: echarts.ECharts;
  data: any[]
  @ViewChild('chart') chartContainer: ElementRef

  constructor (
    private cd: ChangeDetectorRef,
    private dataService: WidgetDataService
  ) {
    super()
  }

  ngOnInit () {
    this.chartInstance = echarts.init(this.chartContainer.nativeElement)
    this.dataService.loadData().subscribe(data => {
      this.data = data
      this.render()
    })
  }
  ngAfterViewInit () {
    this.chartInstance.resize();
  }
  onResized () {
    this.chartInstance.resize();
  }
  onPropertyChange (propName, value) {
    // 若 dimensions 中过有空串，echarts 从此之后会一直报错不听使唤
    if (propName === 'yFieldObjs') this.yFieldObjs = this.yFieldObjs.filter(c => !!c.valueField)
    this.render()
  }

  render () {
    if (!this.data || !this.chartInstance) return
    this.chartInstance.setOption({
      dataset: {
        dimensions: [this.xField, ...this.yFieldObjs.map(yField => yField.valueField)],
        source: this.data
      },
      legend: {
        show: true,
        type: 'scroll'
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#e1f1ff'
          }
        },
        boundaryGap: false
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
            lineStyle: {
              color: '#e1f1ff'
            }
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      series: this.yFieldObjs.map(yField => {
        return {
          type: 'line',
          smooth: this.smooth,
          // symbol: 'none',
          symbol: 'circle',
          symbolSize: 1,
          areaStyle: {
            color: 'none'
          },
          lineStyle: {
            color: yField.color,
            width: 2
          },
          itemStyle: {
              color: yField.color
          }
        }
      }),
      grid: {
        left: 40,
        top: 30,
        right: 30,
        bottom: 35
      },
      textStyle: {
        // color: mainColor
        color: 'gray'
      }
    } as echarts.EChartOption)
    this.cd.markForCheck()
  }
}
