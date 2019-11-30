import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WidgetCoreModule } from '@gspwidget/widget-core'

import { AppComponent } from './app.component';
import { AModule } from 'projects/a/src/public-api';
import { AComponent } from 'projects/a/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
    AComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    WidgetCoreModule,
    HttpClientModule,
    AModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

