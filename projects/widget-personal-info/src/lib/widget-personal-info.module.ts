import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetPersonalInfoComponent } from './widget-personal-info.component';
import { WidgetTitleBarModule } from '@widget/manifest';


@NgModule({
  declarations: [WidgetPersonalInfoComponent],
  imports: [
    BrowserModule,
    WidgetTitleBarModule
  ],
  exports: [WidgetPersonalInfoComponent]
})
export class WidgetPersonalInfoModule { }
