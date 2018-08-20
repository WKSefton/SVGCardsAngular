import { BrowserModule } from '@angular/platform-browser';
import { DeckModule } from './svg-deck/svg-deck.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    DeckModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
