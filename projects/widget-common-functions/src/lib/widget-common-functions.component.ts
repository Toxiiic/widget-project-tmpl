import { Component, OnInit, ViewChildren, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Widget, WidgetBase, WidgetDevkitService } from '@widget/devkit';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { WidgetCommonFunctionsService, Menu4 } from './widget-common-functions.service';

@Widget({ name: 'common-functions' })
@Component({
  selector: 'lib-widget-common-functions',
  templateUrl: './widget-common-functions.component.html',
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
    private widgetSvc: WidgetDevkitService,
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
    this.widgetSvc.openMenu(fn.id)
  }

  handleClickSetting () {
    this.modalRef = this.widgetSvc.openModal(this.settingModal, {
      class: 'common-function-config-modal'
    })
  }
  handleSaveFinish () {
    console.log('save finish !!!')
  }

}
