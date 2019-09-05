import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-cf-setting',
  templateUrl: './cf-setting.component.html',
  styleUrls: ['./cf-setting.component.css']
})
export class CfSettingComponent implements OnInit {


  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
