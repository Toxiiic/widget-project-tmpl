import { NgModule } from '@angular/core';
import { WidgetTaskComponent } from './widget-task.component';
import { CommonModule } from '@angular/common';
import { WidgetTitleBarModule } from '@toxiic/widget-devkit';

@NgModule({
  declarations: [WidgetTaskComponent],
  imports: [
    CommonModule,
    WidgetTitleBarModule
  ],
  exports: [WidgetTaskComponent]
})
export class WidgetTaskModule { }
