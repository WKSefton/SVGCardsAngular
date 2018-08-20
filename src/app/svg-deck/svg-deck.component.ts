import { Component, OnInit, Input } from '@angular/core';
import { DeckService } from './svg-deck.service';

@Component({
  selector: 'svg-deck',
  templateUrl: './svg-deck.component.html',
  styles: [`
    .backfill, .cardscale, .decksize {
      width: 10rem;
    }
    #dropdown {
      height: 2vh;

      padding-bottom: 0px;
      padding-top: 20px;
      overflow: hidden;
      transition: all 1s ease-in-out;
    }
    #dropdown:hover { 
      height: 325px;
      padding: 30px;
    }
  `]
})
export class DeckComponent implements OnInit {

  //default values set for inputs
  @Input() scale: number = 1;
  @Input() fill: string = 'red';
  @Input() state: string = 'face';
  @Input() back: string = 'back';
  @Input() deckSize: number = 15;

  //deck array of current cards in the component
  private deck = [];

  //DeckService injected
  constructor(private _deckService: DeckService) { }

  ngOnInit() {
    //get cards from deck service
    this._deckService.dealCard.subscribe(data => this.deck.push(data),
      error => console.log(error));

    //sends scale/fill/deckSize to the service
    this.setScale();
    this.setFill();
    this.setSize();

    //subscribes to the deck service
    this._deckService.scale.subscribe(data => this.scale = data,
      error => console.log(error));
    this._deckService.deckSize.subscribe(data => this.deckSize = data,
      error => console.log(error));
    this._deckService.fill.subscribe(data => this.fill = data,
      error => console.log(error));

  }

  //sets the deckSize in the service and gets random cards
  setSize() {
    if (this.deckSize > 1000) { return; }
    this.resetCards()
    this._deckService.setDeckSize(this.deckSize);
    setTimeout(() => {
      console.log(this.deckSize);
      for (let index = 0; index < this.deckSize; index++) {
        this.getCard();
      }
    }, 500);
  }

  //toggles between back and alternative-back
  toggleBack() {
    if (this.back == 'back') {
      this.back = 'alternate-back';
    } else {
      this.back = 'back';
    }
  }
  //toggles the face or back animation state
  toggleFace() {
    if (this.state == 'face') {
      this.state = 'back';
    } else {
      this.state = 'face';
    }
  }
  getCard() {
    this._deckService.getCard();
  }
  setScale() {
    this._deckService.setScale(this.scale);
  }
  setFill() {
    this._deckService.setFill(this.fill);
  }
  resetCards() {
    this.deck = [];
  }
}