import { NgModule } from '@angular/core';
import { WidgetTaskComponent } from './widget-task.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WidgetTaskComponent],
  imports: [
    CommonModule
  ],
  exports: [WidgetTaskComponent]
})
export class WidgetTaskModule { }
