import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {OrdersModule} from "./orders/orders.module";
import {AppRoutingModule} from "./app-routing.module";
import {SiteFromeworkModule} from "./site-fromework/site-fromework.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFromeworkModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
