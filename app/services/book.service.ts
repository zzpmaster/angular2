import { Injectable } from '@angular/core';

import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Injectable()
export class BooksService {

    getBooks() {

        return Promise.resolve(BOOKS);

    }

    setBook(name: string, price: number) {

        var book = new Book();
        book.name = name;
        book.price = price;

        BOOKS.push(book);

    }
}

