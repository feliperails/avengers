import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChooseHeroComponent } from './choose-hero/choose-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    ChooseHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
