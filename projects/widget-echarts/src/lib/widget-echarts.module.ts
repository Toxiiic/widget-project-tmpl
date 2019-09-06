import { NgModule } from '@angular/core';
import { WidgetEchartsComponent } from './widget-echarts.component';
import { WidgetTitleBarModule } from '@widget/manifest';

@NgModule({
  declarations: [WidgetEchartsComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [WidgetEchartsComponent]
})
export class WidgetEchartsModule { }
