import { NgModule } from '@angular/core';
import { WidgetPieComponent } from './widget-pie.component';
import { WidgetTitleBarModule } from '@widget/manifest';

@NgModule({
  declarations: [WidgetPieComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [WidgetPieComponent]
})
export class WidgetPieModule { }
