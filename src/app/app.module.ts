import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

