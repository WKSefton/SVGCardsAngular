import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SVGCardsModule } from '../svg-cards/svg-cards.module';

import { DeckService } from './svg-deck.service';
import { DeckComponent } from './svg-deck.component';

@NgModule({
  imports: [
    CommonModule,
    SVGCardsModule,
    FormsModule
  ],
  declarations: [
    DeckComponent
  ],
  exports: [DeckComponent]
})
export class DeckModule { 
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: DeckModule,
      providers: [DeckService]
    }
  }
}
