import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface FilterOption<> {
  value: any,
  name: string
}

/**
 * ```html
 * <lib-widget-title-bar
 *  (onCilckSetting)="handleClickSetting()"
 *  showSetting="true" >
 *    <ng-template #rightTemplate>
        <lib-widget-title-bar-select
            [filterOptions]="[{name: '1', value: '1'}, {name: '2', value: '2'}]"
            (onFilterChange)="handleFilterChange()"
        ></lib-widget-title-bar-select>
        <lib-widget-title-bar-select
            [filterOptions]="[{name: '1', value: '1'}, {name: '2', value: '2'}]"
            (onFilterChange)="handleFilterChange()"
        ></lib-widget-title-bar-select>
    </ng-template>
    </lib-widget-title-bar>
    ```
 */
@Component({
  selector: 'lib-widget-title-bar',
  templateUrl: './widget-title-bar.component.html',
  styleUrls: ['./widget-title-bar.component.scss']
})
export class WidgetTitleBarComponent implements OnInit {

  @Input() title = ''
  @Input() number = 0
  @Input() filterOptions: FilterOption[] = []
  /** 若不设置，默认使用第一项 option */
  @Input() defaultFilterValue: any
  @Output() onFilterChange = new EventEmitter<any>()
  @Output() onClickSetting = new EventEmitter()
  @Output() onClickMore = new EventEmitter()

  @Input() showTitle = true
  @Input() showNumber = false
  @Input() showFilter = false
  @Input() showSetting = false
  @Input() showMore = false

  filter: FormControl

  constructor() { }

  ngOnInit() {
    this.filter = new FormControl(this.defaultFilterValue ? this.defaultFilterValue : this.filterOptions[0].value)

    this.filter.valueChanges.subscribe(newValue => {
      this.onFilterChange.emit(newValue)
    })
  }

}
