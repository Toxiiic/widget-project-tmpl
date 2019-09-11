import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { WidgetTitleBarModule, WidgetModalModule } from '@widget/manifest';

import { WidgetCommonFunctionsComponent } from './widget-common-functions.component';
import { CfSettingComponent } from './cf-setting/cf-setting.component';

@NgModule({
  declarations: [WidgetCommonFunctionsComponent, CfSettingComponent],
  entryComponents: [CfSettingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    WidgetTitleBarModule,
    WidgetModalModule
  ],  
  exports: [WidgetCommonFunctionsComponent]
})
export class WidgetCommonFunctionsModule { }
