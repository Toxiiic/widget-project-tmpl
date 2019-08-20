import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetPersonalInfoComponent } from './widget-personal-info.component';
import { WidgetDevkitModule } from 'projects/widget-devkit/src/public-api';
// TODO: 把元部件依赖的部分都放在一个单独的库里？


@NgModule({
  declarations: [WidgetPersonalInfoComponent],
  imports: [
    BrowserModule,
    WidgetDevkitModule
  ],
  exports: [WidgetPersonalInfoComponent]
})
export class WidgetPersonalInfoModule { }
