"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var book_component_1 = require('./book.component');
var loop_component_1 = require('./loop.component');
var book_service_1 = require('./services/book.service');
var common_1 = require('@angular/common');
var AppComponent = (function () {
    function AppComponent(booksService) {
        this.booksService = booksService;
        this.index = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.name = 'Mark Zhang';
        // this.booksService.getBooks().then(books => this.books = books);
        var self = this;
        this.booksService.getBooks().then(function (books) {
            self.books = books;
            self.loop = self.books[self.index];
        });
        setInterval(function () {
            if (self.books.length !== 0) {
                if (self.index === self.books.length) {
                    self.index = 0;
                }
                self.loop = self.books[self.index];
                self.index++;
            }
        }, 4000);
    };
    AppComponent.prototype.addBook = function (bookName, bookPrice) {
        if (bookName.value === '' || bookPrice.value === '') {
            alert('Please input bookName or bookPrice');
            return;
        }
        this.booksService.setBook(bookName.value, parseInt(bookPrice.value, 10));
        bookName.value = '';
        bookPrice.value = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/homeLayout.html',
            directives: [loop_component_1.LoopComponent, book_component_1.BookComponent, common_1.NgFor],
            providers: [book_service_1.BooksService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BooksService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map