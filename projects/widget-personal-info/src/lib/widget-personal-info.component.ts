import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget, WidgetBase } from '@widget/manifest';
import { Property } from '@widget/manifest';

@Widget({
  name: 'personal-info'
})
@Component({
  selector: 'lib-widget-personal-info',
  templateUrl: './widget-personal-info.component.html',
  styleUrls: ['./widget-personal-info.component.scss']
})
export class WidgetPersonalInfoComponent extends WidgetBase {

  @Property({
    tip: '未设置头像时显示的图片地址'
  }) avatarUrl = 'http://y2.ifengimg.com/a/2015_51/08c3c119dc21e81.jpg'
  @Property({
    tip: '无名称数据时，显示在名称位置的字符'
  }) name = '未设置名称'
  @Property({
    tip: '无岗位数据时，显示在岗位位置的字符'
  }) pos = '无岗位信息'
  @Property({
    tip: '无组织数据时，显示在名称位置的字符'
  }) org = '我走过的路，都是希望的路~'

  baseUrl = window['DashboardApi']!.baseUrl || 'http://10.25.11.80:8081'

  constructor(
    private http: HttpClient
  ) {
    super()
  }
  handleClickSetting () {
    console.log('setting')
  }
  handleFilterChange () {
    console.log('filter change')
  }
  ngOnInit() {
    this.http.get<any>(`${this.baseUrl}/api/runtime/epp/v1.0/userinfo/`).subscribe(res => {
      console.log(res)
      this.avatarUrl = res.avatarUrl || this.avatarUrl,
      this.name = res.name || this.name,
      this.pos = res.posNames ? res.posNames.join(' | ') : this.pos,
      this.org = res.orgName || this.org
    })
  }

  onResized () {}

}
