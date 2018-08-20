import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  //BehaviourSubjects and Observables
  private localCard = new BehaviorSubject<string>('');
  public dealCard = this.localCard.asObservable();
  private localScale = new BehaviorSubject<number>(0);
  public scale = this.localScale.asObservable();
  private localFill = new BehaviorSubject<string>('');
  public fill = this.localFill.asObservable();
  private localDeckSize = new BehaviorSubject<number>(0);
  public deckSize = this.localDeckSize.asObservable();

  //deck array to grab with SVG USE
  private deck: string[];
  private cards = {
    suit: ['club', 'diamond', 'heart', 'spade'],
    rank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
  }

  //deck array created in constructor
  constructor() {
    this.createDeck();
  }

  //sets the number of cards to be drawn
  setDeckSize(number: number) {
    this.localDeckSize.next(number);
  }

  //set scale of the cards keeping ratio in tact
  setScale(value: number) {
    this.localScale.next(value);
  }

  //sets the color fill for the back side of the card
  setFill(fill: string) {
    this.localFill.next(fill)
  }

  //draws a random card out of the deck array
  getCard() {
    this.localCard.next(this.deck[Math.floor(Math.random() * 52)]);
  }

  //creates the deck array
  createDeck() {
    this.deck = [];
    for (let suit of this.cards.suit) {
      for (let rank of this.cards.rank) {
        this.deck.push(suit + '_' + rank);
      }
    }
    this.deck.push('joker_black');
    this.deck.push('joker_red');
  }
}
