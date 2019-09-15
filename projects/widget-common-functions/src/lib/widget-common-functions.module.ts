import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { WidgetTitleBarModule, WidgetDevkitModule } from '@widget/devkit';

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
    WidgetDevkitModule
  ],  
  exports: [WidgetCommonFunctionsComponent]
})
export class WidgetCommonFunctionsModule { }
