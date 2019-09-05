import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-cf-setting',
  templateUrl: './cf-setting.component.html',
  styleUrls: ['./cf-setting.component.css']
})
export class CfSettingComponent implements OnInit {
  @Input() modalRef: BsModalRef

  constructor(
  ) { }

  ngOnInit() {
  }

}
