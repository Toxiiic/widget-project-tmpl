import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetPersonalInfoComponent } from './widget-personal-info.component';
import { WidgetTitleBarModule } from '@toxiic/widget-devkit';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [WidgetPersonalInfoComponent],
  imports: [
    BrowserModule,
    WidgetTitleBarModule,
    HttpClientModule
  ],
  exports: [WidgetPersonalInfoComponent]
})
export class WidgetPersonalInfoModule { }