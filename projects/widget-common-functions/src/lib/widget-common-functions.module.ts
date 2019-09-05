import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetTitleBarModule, WidgetModalModule } from '@widget/manifest';

import { WidgetCommonFunctionsComponent } from './widget-common-functions.component';
import { CfSettingComponent } from './cf-setting/cf-setting.component';
console.log(WidgetTitleBarModule, WidgetModalModule)
@NgModule({
  declarations: [WidgetCommonFunctionsComponent, CfSettingComponent],
  entryComponents: [CfSettingComponent],
  imports: [
    BrowserModule,
    WidgetTitleBarModule,
    WidgetModalModule
  ],  
  exports: [WidgetCommonFunctionsComponent]
})
export class WidgetCommonFunctionsModule { }
