import { NgModule } from '@angular/core';
import { WidgetLineComponent } from './widget-line.component';
import { WidgetTitleBarModule } from '@gspwidget/widget-devkit';

@NgModule({
  declarations: [WidgetLineComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [WidgetLineComponent]
})
export class WidgetLineModule { }
