import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget, WidgetBase } from '@widget/devkit';
import { Property } from '@widget/devkit';

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
  }) name = '马斯克'
  @Property({
    tip: '无岗位数据时，显示在岗位位置的字符'
  }) pos = '前端技术专家'
  @Property({
    tip: '无组织数据时，显示在名称位置的字符'
  }) org = '浪潮集团-浪潮国际-平台与技术部'

  baseUrl = (window['DashboardApi'] && window['DashboardApi'].baseUrl)
    || 'http://10.25.11.80:8081/api/runtime/epp/v1.0/'

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
    this.http.get<any>(`${this.baseUrl}userinfo/`).subscribe(res => {
      console.log(res)
      this.avatarUrl = res.avatarUrl || this.avatarUrl,
      this.name = res.name || this.name,
      this.pos = res.posNames ? res.posNames.join(' | ') : this.pos,
      this.org = res.orgName || this.org
    })
  }

  onResized () {}

}
