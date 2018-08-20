import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'svg-card',
  templateUrl: './svg-cards.component.html',
  styles: [
    `
    .svgcard{
      transform-style: preserve-3d;
      perspective: 600px;
      position: relative;
    }
    .face{
      backface-visibility: hidden;
    }
    .back{
      position: absolute;
      backface-visibility: hidden;
      transform: rotateY(180deg);
    }
    `
  ],
      animations: [
        trigger('flipState', [
          state('face', style({
            transform: 'rotateY(-180deg)'
          })),
          state('back', style({
            transform: 'rotateY(0deg)'
          })),
          transition('face => back', animate('1000ms ease-in')),
          transition('back => face', animate('1000ms ease-out'))
        ])  
      ]
})
export class CardComponent implements OnInit, OnChanges {

  @Input() card: string = 'spade_1';
  @Input() fill: string = 'darkred';
  @Input() scale: number = 1;
  @Input() state: string = 'face';
  @Input() back: string = 'back';
  private width: number;
  private height: number;

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {
    this.height = this.scale * 244.640;
    this.width = this.scale * 169.075;
  }
  toggleState() {
    this.state = this.state === 'back' ? 'face' : 'back';
  }
}
