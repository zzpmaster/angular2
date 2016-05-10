import {Component} from '@angular/core';

@Component({
  selector: 'book',
  template: `<div [ngClass]="{bordered: true}">
                    <span>{{nameValue.name}}: </span>
                    <span>{{nameValue.value}}</span>
               </div>`,
  inputs: ['nameValue'],
  styles: [`
        .bordered {
            border: 1px dashed black;
            padding: 5px 5px 5px 5px;
        }
  `]
})

export class BookComponent {
  nameValue: {};
  constructor() {

  }
}
