import { Component, Input } from '@angular/core';

import { Book } from './book';


@Component({
  selector: 'loop-book',
  template: `<div *ngIf="loopBook"><div [ngClass]="{fontColor: true}">
                Today's special offer book: {{loopBook.name}}, price: {{loopBook.price}}
             </div></div>`,
  inputs: ['loopBook'],
  styles: [`
        .fontColor {
            color: red;
            padding-bottom: 10px;
        }
  `]
})

export class LoopComponent {
  @Input() loopBook: Book;
  constructor() {

  }

}
