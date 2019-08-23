import { Component, OnInit, Input } from '@angular/core';
import { Widget, WidgetBase } from '@widget/manifest';

@Widget({
  name: 'personal-info'
})
@Component({
  selector: 'lib-widget-personal-info',
  templateUrl: './widget-personal-info.component.html',
  styleUrls: ['./widget-personal-info.component.scss']
})
export class WidgetPersonalInfoComponent extends WidgetBase {

  constructor() {
    super()
    this.option = {
      title: '个人信息',
      avatarUrl: 'https://github.com/fluidicon.png',
      name: '李浪潮',
      role: '浪潮国际-销售专员',
      tags: ['销售王牌', '情商碾压', '沟通高效']
    }
  }
  handleChangeFilter (e) {
    console.log(e)
  }
  ngOnInit() {
  }

  onResized () {}

}
