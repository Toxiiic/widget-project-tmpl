import { NgModule } from '@angular/core';
import { AComponent } from './a.component';
import { WidgetTitleBarModule } from '@gspwidget/widget-devkit';

@NgModule({
  declarations: [AComponent],
  imports: [
    WidgetTitleBarModule
  ],
  exports: [AComponent]
})
export class AModule { }
