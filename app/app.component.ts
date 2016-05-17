import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { BookComponent } from './book.component';
import { LoopComponent } from './loop.component';

import { BooksService } from './services/book.service';
import { Book } from './book';
import { NgFor } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/homeLayout.html',
  directives: [LoopComponent, BookComponent, NgFor],
  providers: [BooksService]

})

export class AppComponent implements OnInit {
  name: String;
  // books: Array<any>;
  books: Book[];

  index: number;
  loop: {};

  constructor(private booksService: BooksService) {
    this.index = 0;
  }

  ngOnInit() {
    this.name = 'Mark Zhang';
    // this.booksService.getBooks().then(books => this.books = books);

    var self = this;
    this.booksService.getBooks().then(function (books) {
      self.books = books;
      self.loop = self.books[self.index];
    });

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

  addBook(bookName: HTMLInputElement, bookPrice: HTMLInputElement): void {

    if (bookName.value === '' || bookPrice.value === '') {
      alert('Please input bookName or bookPrice');
      return;
    }

    this.booksService.setBook(bookName.value, parseInt(bookPrice.value, 10));

    bookName.value = '';
    bookPrice.value = '';

  }

}
