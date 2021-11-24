import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsPageComponent } from './component/cats-page/cats-page.component';
import { CircledPhotoComponent } from './component/basic/circled-photo/circled-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsPageComponent,
    CircledPhotoComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule, AppRoutingModule]
})
export class AppModule { }
