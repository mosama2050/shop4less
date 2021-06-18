import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule } from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent,
        SideBarComponent,
        FooterComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    RouterModule
  ],
    imports: [
      RouterModule,
        CommonModule
    ]
})
export class SiteFromeworkModule { }
