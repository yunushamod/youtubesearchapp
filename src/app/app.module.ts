import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/component/search-input/search-input.component';
import { SearchListComponent } from './search/component/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import {SharedModule} from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
