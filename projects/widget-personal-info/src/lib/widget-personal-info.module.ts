import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetPersonalInfoComponent } from './widget-personal-info.component';

@NgModule({
  declarations: [WidgetPersonalInfoComponent],
  imports: [
    BrowserModule
  ],
  exports: [WidgetPersonalInfoComponent]
})
export class WidgetPersonalInfoModule { }
