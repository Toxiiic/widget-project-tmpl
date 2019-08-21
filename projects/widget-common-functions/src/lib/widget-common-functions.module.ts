import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WidgetCommonFunctionsComponent } from './widget-common-functions.component';
import { WidgetDevkitModule } from 'projects/widget-devkit/src/public-api';

@NgModule({
  declarations: [WidgetCommonFunctionsComponent],
  imports: [
    WidgetDevkitModule,
    BrowserModule
  ],
  exports: [WidgetCommonFunctionsComponent]
})
export class WidgetCommonFunctionsModule { }
