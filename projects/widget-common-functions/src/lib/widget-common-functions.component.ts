import { Component, OnInit, ViewChildren, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Widget, WidgetBase, WidgetModalService } from '@widget/manifest';
import { CfSettingComponent } from './cf-setting/cf-setting.component';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { WidgetCommonFunctionsService, Menu4 } from './widget-common-functions.service';

// export interface FunctionItem {
//   id: string,
//   name: string,
// }

@Widget({ name: 'common-functions' })
@Component({
  selector: 'lib-widget-common-functions',
  templateUrl: './widget-common-functions.component.html',
  // styles: []
})
export class WidgetCommonFunctionsComponent extends WidgetBase implements AfterViewInit {

  functionList: Menu4[] = []

  @ViewChild('icon1') icon1
  @ViewChild('icon2') icon2
  @ViewChild('icon3') icon3
  icons

  @ViewChild('settingModal') settingModal
  modalRef: BsModalRef

  constructor(
    private modalSvc: WidgetModalService,
    private cfSvc: WidgetCommonFunctionsService
  ) {
    super()
  }

  ngOnInit() {
    this.renderData()
    this.cfSvc.onSaveFinished.subscribe(() => {
      this.renderData()
    })
  }

  // @ViewChild 在 ngOnInit 之后，ngAfterViewInit 之前拿到值
  ngAfterViewInit () {
    this.icons = [this.icon1, this.icon2, this.icon3]
    console.log(this.icon1)
  }

  renderData () {
    this.cfSvc.getCommonMenu4().subscribe(res => {
      this.functionList = res
    })
  }

  handleClickFunction (fn: Menu4) {
    console.log(`点击 ${fn.name}`)
    console.log(this.icons)
  }

  handleClickSetting () {
    this.modalRef = this.modalSvc.show(this.settingModal, {
      class: 'common-function-config-modal'
    })
  }
  handleSaveFinish () {
    console.log('save finish !!!')
  }

}
