import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

import "echarts";
import * as echarts from 'echarts';
// declare var echarts1;
import { Widget } from '@widget/manifest';
import { WidgetComponent } from 'src/widget.interface';

@Widget({name:"echarts"})
@Component({
  selector: 'eg-widget-echarts',
  template: `
    <div id="main" style="height:100%;width:100%;" #chart>
    </div>
  `,
  styles: []
})
export class WidgetEchartsComponent implements OnInit, WidgetComponent {

  chartInstance:echarts.ECharts;

  @ViewChild("chart") 
  chartContainer:ElementRef;
  
  constructor(private render2:Renderer2) { }

  ngOnInit() {
    console.log(this.chartContainer);
    this.chartInstance = echarts.init(this.chartContainer.nativeElement);
    this.chartInstance.setOption(this.chartOption);

    // this.render2.listen(this.chartContainer.nativeElement,"onresize",event=>{
    //   console.log("onresize");
    //   this.chartInstance.resize();
    // })
  }

  // ngAfterViewInit(): void {
  //   console.log("view init",this.chartContainer);

  // }
  onResized(){
    this.chartInstance.resize();
  }

  chartOption:echarts.EChartOption  = {
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  };

}
