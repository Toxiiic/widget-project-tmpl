import { Component, OnInit, ViewChildren, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Widget, WidgetBase } from '@widget/manifest';

export interface FunctionItem {
  id: string,
  name: string,
}

@Widget({ name: 'common-functions' })
@Component({
  selector: 'lib-widget-common-functions',
  templateUrl: './widget-common-functions.component.html',
  // styles: []
})
export class WidgetCommonFunctionsComponent extends WidgetBase implements AfterViewInit {

  functionList: FunctionItem[] = [
    { name: '制作订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销订单', id: 'a' },
    { name: '制作销售单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
  ]

  @ViewChild('icon1') icon1
  @ViewChild('icon2') icon2
  @ViewChild('icon3') icon3

  icons

  constructor() {
    super()
  }

  ngOnInit() {
  }

  ngAfterViewInit () {
    this.icons = [this.icon1, this.icon2, this.icon3]
    console.log(this.icon1)
  }

  handleClickFunction (fn: FunctionItem) {
    console.log(`点击 ${fn.name}`)
    console.log(this.icons)
  }

}
