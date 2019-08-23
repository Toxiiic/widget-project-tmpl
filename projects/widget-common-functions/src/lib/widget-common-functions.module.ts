import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetTitleBarModule } from '@widget/manifest';

import { WidgetCommonFunctionsComponent } from './widget-common-functions.component';

@NgModule({
  declarations: [WidgetCommonFunctionsComponent],
  imports: [
    WidgetTitleBarModule,
    BrowserModule
  ],  
  exports: [WidgetCommonFunctionsComponent]
})
export class WidgetCommonFunctionsModule { }
