import { Component } from '@angular/core';
import { BookComponent } from './book.component';
import {LoopComponent} from './loop.component';

import { NgFor } from '@angular/common';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App, Welcome to {{name}}\'s Shop</h1>
             <loop-book [loopBook]="loop"></loop-book>
             <div style="padding-bottom: 10px">
                <label for="bookName">Book Name:</label>
                <input name="bookName" #newName/>
                <label for="bookValue">Book Value:</label>
                <input name="bookValue" #newValue/>
                <button (click)="addBook(newName, newValue)">Add Book</button>
             </div>
             <book *ngFor="let b of books" [nameValue]="b"></book>`,
  directives: [LoopComponent, BookComponent, NgFor]

})

export class AppComponent {
  name: String;
  books: Array<any>;

  index: number;
  loop: {};

  constructor() {
    this.name = 'Mark Zhang';
    this.books = [{
      name: 'AngularJS',
      value: '100.0'
    }, {
      name: 'Swift',
      value: '120.0'
    }];
    this.index = 0;
    this.loop = this.books[this.index];

    var self = this;
    setInterval(function() {
      if (self.books.length !== 0) {
        if (self.index === self.books.length) {
          self.index = 0;
        }
        self.loop = self.books[self.index];
        self.index++;
      }
    }, 4000);

  }

  addBook(bookName: HTMLInputElement, bookValue: HTMLInputElement): void {

    if (bookName.value === '' || bookValue.value === '') {
      alert('请输入bookName or bookValue');
      return;
    }

    this.books.push({
      name: bookName.value,
      value: bookValue.value
    });

    bookName.value = '';
    bookValue.value = '';

  }

}
