import { Component, OnInit } from '@angular/core';
import { WidgetBase } from 'projects/widget-devkit/src/WidgetBase';
import { Widget } from '@widget/manifest';

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
export class WidgetCommonFunctionsComponent extends WidgetBase {

  functionList: FunctionItem[] = [
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
    { name: '制作销售订单', id: 'a' },
  ]

  constructor() {
    super()
  }

  ngOnInit() {
  }

  handleClickFunction (fn: FunctionItem) {
    console.log(`点击 ${fn.name}`)
  }

}
