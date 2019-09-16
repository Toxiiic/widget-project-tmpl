import { NgModule } from '@angular/core';
import { WidgetPieComponent } from './widget-pie.component';
import { WidgetTitleBarModule } from '@toxiic/widget-devkit';

@NgModule({
  declarations: [WidgetPieComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [WidgetPieComponent]
})
export class WidgetPieModule { }
