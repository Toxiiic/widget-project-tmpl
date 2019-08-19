import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent, WidgetOptions } from 'src/widget.interface';

@Component({
  selector: 'lib-widget-personal-info',
  templateUrl: './widget-personal-info.component.html',
  styleUrls: ['./widget-personal-info.component.scss']
})
export class WidgetPersonalInfoComponent implements OnInit, WidgetComponent {

  @Input() option: WidgetOptions = {
    avatarUrl: 'https://github.com/fluidicon.png',
    name: '李浪潮',
    role: '浪潮国际-销售专员',
    tags: ['销售王牌', '情商碾压', '沟通高效']
  }

  constructor() { }

  ngOnInit() {
  }

  onResized () {}

}
