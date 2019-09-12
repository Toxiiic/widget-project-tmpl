import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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

  baseUrl = (window['DashboardApi'] && window['DashboardApi'].baseUrl)
    || `http://10.25.11.80:8081`
  url = `/api/runtime/epp/v1.0/func/`

  menu12List: Menu1[] = []
  menu34List: Menu3[] = null
  selectedMenu2
  selectedMenu4List = selectedMenu4List

  @Input() modalRef: BsModalRef

  constructor(
    private http: HttpClient
  ) { }
  
  ngOnInit() {
    this._getAllMenu1().subscribe(menu1List => {
      this.menu12List = menu1List.map(menu1 => {
        return {
          id: menu1.id,
          name: menu1.name,
          children: null
        }
      })
    })

    this._getSelectedMenu4().subscribe(selectedMenu4List => {
      this.selectedMenu4List = selectedMenu4List
    })
  }
  getMenu4Checked (menu4: Menu4) {
    // console.log('get ....')
    return !!this.selectedMenu4List.find(selectedMenu4 => menu4.id==selectedMenu4.id)
  }

  removeSelectedMenu4 (menu4: Menu4) {
    let index = this.selectedMenu4List.findIndex(selected => selected.id==menu4.id)
    if(index>-1) this.selectedMenu4List.splice(index, 1)
  }
  addSelectedMenu4 (menu4: Menu4) {
    let index = this.selectedMenu4List.findIndex(selected => selected.id==menu4.id)
    if(index==-1) this.selectedMenu4List.push(menu4)
  }
  handleMenu1OpenChange (open: boolean, menu1: Menu1) {
    // 如果是 关闭 或者 孩子已经加载出来了，就不用再加载了
    if(!open || menu1.children) return
    // TODO: laoding
    this._getMenu2(menu1.id).subscribe(menu2List => {
      // TODO: end laoding
      menu1.children = menu2List
    })
  }
  handleSelectMenu2 (menu2: Menu2) {
    this.selectedMenu2 = menu2
    // TODO: laoding
    this._getMenu34(menu2.id).subscribe(menu34List => {
      // TODO: end laoding
      this.menu34List = menu34List
      console.log(this.menu34List)
    })
  }

  handleMenu4SelectChange (e, menu4: Menu4) {
    if(e.target.checked) {
      this.addSelectedMenu4(menu4)
    } else {
      this.removeSelectedMenu4(menu4)
    }
  }


  _getAllMenu1 () {
    return this.http.get<any>(this.baseUrl+this.url+'0')
    // return of(menu1)
  }
  _getMenu2 (menu1Id: string) {
    return this.http.get<any>(this.baseUrl+this.url+menu1Id)
    // return of(menu2)
  }
  _getMenu34 (menu2Id: string) {
    return this.http.get<any>(this.baseUrl+this.url+menu2Id)
    // return of(menu34List)
  }
  _getSelectedMenu4 () {
    // return of(selectedMenu4List)
    return of([])
  }
  _saveSelectedMenu4 (selectedMenu4List: Menu4[]) {
    return of(true)
  }

}


const menu1 = [{
  id: 'a1',
  name: '事项申请'
}, {
  id: 'a2',
  name: '事项申请'
}, {
  id: 'a3',
  name: '事项申请'
}, {
  id: 'a4',
  name: '事项申请'
}]
const menu2 = [{
  id: 'b1',
  name: '事项申请b'
}, {
  id: 'b2',
  name: '事项申请b'
}, {
  id: 'b3',
  name: '事项申请b'
}, {
  id: 'b4',
  name: '事项申请b'
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
