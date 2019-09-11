import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


const menu34List = [{
  name: '事项申请',
  children: [{
    id: '2',
    name: '交通费销单',
  }, {
    id: '3',
    name: '交通费报销单',
  }, {
    id: '4',
    name: '交通销单',
  }, {
    id: '5',
    name: '交通费销单',
  }, {
    id: '6',
    name: '交通费报销单',
  }, {
    id: '7',
    name: '交通费报销单',
  }]
}, {
  name: '事项申请',
  children: [{
    id: '8',
    name: '交通费销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报单',
  }]
}, {
  name: '事项申请',
  children: [{
    id: 'a',
    name: '交通销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }]
}, {
  name: '事项申请',
  children: [{
    id: 'a',
    name: '交通销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }, {
    id: 'a',
    name: '交通费报销单',
  }]
}]
const selectedList = [{
  id: 'a',
  name: '交通费报销单',
}, {
  id: '2',
  name: '交通费报销单',
}, {
  id: '3',
  name: '交通费单',
}, {
  id: '4',
  name: '交通费报销单',
}, {
  id: '5',
  name: '交通费报销',
}, {
  id: '6',
  name: '交通费报',
}]

@Component({
  selector: 'lib-cf-setting',
  templateUrl: './cf-setting.component.html',
  styleUrls: ['./cf-setting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CfSettingComponent implements OnInit {

  menu34List = menu34List
  selectedList = selectedList

  @Input() modalRef: BsModalRef

  constructor(
  ) { }

  ngOnInit() {
  }

}
