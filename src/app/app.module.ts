import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MosineComponent } from './mosine/mosine.component';
import { HajjarComponent } from './hajjar/hajjar.component';

@NgModule({
  declarations: [
    AppComponent,
    MosineComponent,
    HajjarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
