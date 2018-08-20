import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './svg-cards.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
      CommonModule,
      BrowserAnimationsModule
  ],
  providers: [],
  exports: [CardComponent]
})
export class SVGCardsModule { }