import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WidgetCoreModule } from '@gspwidget/widget-core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashboardCommonModule } from '@gspwidget/common';

import { AppComponent } from './app.component';
import { WidgetLineModule } from 'projects/widget-line/src/public-api';
import { WidgetLineComponent } from 'projects/widget-line/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
    WidgetLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    DashboardCommonModule,
    WidgetCoreModule,
    HttpClientModule,
    WidgetLineModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

