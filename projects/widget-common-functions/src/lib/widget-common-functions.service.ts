import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

export interface Menu1 {
  id?: string,
  name: string,
  children?: Menu2[]
}
export interface Menu2 {
  id: string,
  name: string,
}
export interface Menu3 {
  id?: string,
  name: string,
  children: Menu4[]
}
export interface Menu4 {
  id: string,
  name: string,
}

const baseUrl = (window['DashboardApi'] && window['DashboardApi'].baseUrl)
|| `http://10.25.11.80:8081`

const url = `/api/runtime/epp/v1.0/func/`

@Injectable({
  providedIn: 'root'
})
export class WidgetCommonFunctionsService {

  onSaveFinished = new EventEmitter()

  constructor(
    private http: HttpClient
  ) { }

  
  getAllMenu1 () {
    return this.http.get<any>(baseUrl+url+'0')
    // return of(menu1)
  }
  getMenu2 (menu1Id: string) {
    return this.http.get<any>(baseUrl+url+menu1Id)
    // return of(menu2)
  }
  getMenu34 (menu2Id: string) {
    return this.http.get<any>(baseUrl+url+menu2Id)
    // return of(menu34List)
  }
  getCommonMenu4 () {
    // return of(selectedMenu4List)
    return this.http.get<any>(baseUrl+url+'userfunc')
  }
  saveSelectedMenu4 (selectedMenu4List: Menu4[]) {
    return this.http.put<any>(baseUrl+url,
      selectedMenu4List.map(m4 => m4.id),
      { responseType: 'text' }
    )
    // return of(true)
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