import { NgModule } from '@angular/core';
import { WidgetWeatherComponent } from './widget-weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WidgetWeatherComponent],
  imports: [
    HttpClientModule
  ],
  exports: [WidgetWeatherComponent]
})
export class WidgetWeatherModule { }
