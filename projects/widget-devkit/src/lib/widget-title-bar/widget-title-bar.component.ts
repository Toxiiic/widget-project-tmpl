import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 无背景色
 */
@Component({
  selector: 'lib-widget-title-bar',
  templateUrl: './widget-title-bar.component.html',
  styleUrls: ['./widget-title-bar.component.scss']
})
export class WidgetTitleBarComponent implements OnInit {

  @Input() title = ''
  @Input() number = 0
  @Output() onClickSetting = new EventEmitter()
  @Output() onClickMore = new EventEmitter()
  @Input() showTitle = true
  @Input() showNumber = false
  @Input() showSetting = false
  @Input() showMore = false

  constructor() { }

  ngOnInit() {
  }

}
