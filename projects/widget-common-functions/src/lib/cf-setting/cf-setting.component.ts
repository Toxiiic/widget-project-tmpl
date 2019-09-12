import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

interface Menu1 {
  id?: string,
  name: string,
  children?: Menu2[]
}
interface Menu2 {
  id: string,
  name: string,
}
interface Menu3 {
  id?: string,
  name: string,
  children: Menu4[]
}
interface Menu4 {
  id: string,
  name: string,
}

@Component({
  selector: 'lib-cf-setting',
  templateUrl: './cf-setting.component.html',
  styleUrls: ['./cf-setting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CfSettingComponent implements OnInit {

  menu12List: Menu1[] = menu12List
  menu34List: Menu3[] = menu34List
  selectedMenu2
  selectedMenu4List = selectedMenu4List

  @Input() modalRef: BsModalRef

  constructor(
  ) { }
  
  ngOnInit() {
    
  }

  removeSelectedMenu4 (menu4: Menu4) {
    let index = this.selectedMenu4List.indexOf(menu4)
    if(index>-1) this.selectedMenu4List.splice(index, 1)
  }
  addSelectedMenu4 (menu4: Menu4) {
    let index = this.selectedMenu4List.indexOf(menu4)
    if(index==-1) this.selectedMenu4List.push(menu4)
  }

  handleChange (e, menu4: Menu4) {
    console.log(e.target.checked)
    if(e.target.checked) {
      this.addSelectedMenu4(menu4)
    } else {
      this.removeSelectedMenu4(menu4)
    }
  }

}



const menu12List = [{
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
const selectedMenu4List = [{
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
