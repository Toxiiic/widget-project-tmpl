import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetDevkitComponent } from './widget-devkit.component';
import { WidgetTitleBarComponent } from './widget-title-bar/widget-title-bar.component';

@NgModule({
  declarations: [
    WidgetDevkitComponent,
    WidgetTitleBarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    WidgetDevkitComponent,
    WidgetTitleBarComponent
  ]
})
export class WidgetDevkitModule { }
