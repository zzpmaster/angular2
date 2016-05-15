import {Component} from '@angular/core';

import {Book} from './book';

@Component({
  selector: 'book',
  template: `<div [ngClass]="{bordered: true}">
                    <span>{{oneBook.name}}: </span>
                    <span>{{oneBook.price}}</span>
               </div>`,
  inputs: ['oneBook'],
  styles: [`
        .bordered {
            border: 1px dashed black;
            padding: 5px 5px 5px 5px;
        }
  `]
})

export class BookComponent {
  oneBook: Book;
  constructor() {

  }
}
