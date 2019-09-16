import { NgModule } from '@angular/core';
import { WidgetEchartsComponent } from './widget-echarts.component';
import { WidgetTitleBarModule } from '@toxiic/widget-devkit';

@NgModule({
  declarations: [WidgetEchartsComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [WidgetEchartsComponent]
})
export class WidgetEchartsModule { }
