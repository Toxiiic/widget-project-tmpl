import { Component, OnInit } from '@angular/core';
import { Property } from '@widget/devkit';

@Component({
  selector: 'widget-number',
  templateUrl: './number.component.html',
  styles: []
})
export class NumberComponent implements OnInit {

  @Property() bgColor = '#F28D48'
  @Property() color = 'white'
  @Property() title = '团队日报（昨天）'
  // @Property() color = 'white'

  constructor() { }

  ngOnInit() {
  }

}
