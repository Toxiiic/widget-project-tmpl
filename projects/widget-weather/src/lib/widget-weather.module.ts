import { NgModule } from '@angular/core';
import { WidgetWeatherComponent } from './widget-weather.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [WidgetWeatherComponent],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [WidgetWeatherComponent]
})
export class WidgetWeatherModule { }
