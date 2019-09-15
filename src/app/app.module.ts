import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetEchartsModule } from 'projects/widget-echarts/src/public-api';
import { WidgetWeatherModule } from 'projects/widget-weather/src/public-api';
import { WidgetPersonalInfoModule } from 'projects/widget-personal-info/src/public-api';
import { WidgetCommonFunctionsModule } from 'projects/widget-common-functions/src/public-api';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WidgetSimpleLineModule } from 'projects/widget-simple-line/src/public-api';
import { WidgetPieModule } from 'projects/widget-pie/src/public-api';
import { NumberModule } from 'projects/number/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetEchartsModule,
    WidgetSimpleLineModule,
    WidgetWeatherModule,
    WidgetPersonalInfoModule,
    WidgetCommonFunctionsModule,
    WidgetPieModule,
    NumberModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
