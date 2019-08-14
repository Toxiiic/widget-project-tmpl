import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetEchartsModule } from 'projects/widget-echarts/src/public-api';
import { WidgetWeatherModule } from 'projects/widget-weather/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetEchartsModule,
    WidgetWeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
