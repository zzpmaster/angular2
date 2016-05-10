import { Component } from '@angular/core';

@Component({
  selector: 'loop-book',
  template: `<div [ngClass]="{fontColor: true}">Today's special offer book: {{loopBook.name}}, price: {{loopBook.value}}</div>`,
  inputs: ['loopBook'],
  styles: [`
        .fontColor {
            color: red;
            padding-bottom: 10px;
        }
  `]
})

export class LoopComponent {
  loopBook: {};
  constructor() {

  }

}
