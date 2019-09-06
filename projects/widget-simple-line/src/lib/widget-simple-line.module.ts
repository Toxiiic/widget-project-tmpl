import { NgModule } from '@angular/core';
import { WidgetSimpleLineComponent } from './widget-simple-line.component';
import { WidgetTitleBarModule } from '@widget/manifest';

@NgModule({
  declarations: [WidgetSimpleLineComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [WidgetSimpleLineComponent]
})
export class WidgetSimpleLineModule { }
