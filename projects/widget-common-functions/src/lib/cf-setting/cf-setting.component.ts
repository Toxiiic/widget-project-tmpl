import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
// import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';
import { Menu1, Menu2, Menu3, Menu4, WidgetCommonFunctionsService } from '../widget-common-functions.service';

@Component({
  selector: 'lib-cf-setting',
  templateUrl: './cf-setting.component.html',
  styleUrls: ['./cf-setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CfSettingComponent implements OnInit {

  maxSelectedMenu4 = 9
  @Input() modalRef: BsModalRef

  menu12List: Menu1[] = []
  selectedMenu2: Menu2
  menu34List: Menu3[] = null
  selectedMenu4List: Menu4[] = []

  saveLoading = false

  constructor(
    private cfService: WidgetCommonFunctionsService
  ) { }
  
  ngOnInit() {
    this.cfService.getAllMenu1().subscribe(menu1List => {
      this.menu12List = menu1List.map(menu1 => {
        return {
          id: menu1.id,
          name: menu1.name,
          children: null
        }
      })
    })

    this.cfService.getCommonMenu4().subscribe(selectedMenu4List => {
      this.selectedMenu4List = selectedMenu4List
    })
  }
  getMenu4Checked (menu4: Menu4) {
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
    menu1.loadingChildren = true
    this.cfService.getMenu2(menu1.id).subscribe(menu2List => {
      menu1.loadingChildren = false
      menu1.children = menu2List
    })
  }
  handleSelectMenu2 (menu2: Menu2) {
    this.selectedMenu2 = menu2
    menu2.loadingChildren = true
    this.cfService.getMenu34(menu2.id).subscribe(menu34List => {
      menu2.loadingChildren = false
      this.menu34List = menu34List
    })
  }

  handleMenu4SelectChange (e, menu4: Menu4) {
    if(e.target.checked) {
      this.addSelectedMenu4(menu4)
    } else {
      this.removeSelectedMenu4(menu4)
    }
  }
  handleSave () {
    this.saveLoading = true
    this.cfService.saveSelectedMenu4(this.selectedMenu4List).subscribe(res => {
      if(res == 'success') {
        // TODO: 前端成功提示
        this.saveLoading = false
        this.modalRef.hide()
        this.cfService.onSaveFinished.emit()
      }
    }, err => {
      this.saveLoading = false
      // TODO: 前端错误通知
    })
  }

}


