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
var common_1 = require('@angular/common');
var AppComponent = (function () {
    function AppComponent() {
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
        setInterval(function () {
            if (self.books.length !== 0) {
                if (self.index === self.books.length) {
                    self.index = 0;
                }
                self.loop = self.books[self.index];
                self.index++;
            }
        }, 4000);
    }
    AppComponent.prototype.addBook = function (bookName, bookValue) {
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
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular 2 App, Welcome to {{name}}'s Shop</h1>\n             <loop-book [loopBook]=\"loop\"></loop-book>\n             <div style=\"padding-bottom: 10px\">\n                <label for=\"bookName\">Book Name:</label>\n                <input name=\"bookName\" #newName/>\n                <label for=\"bookValue\">Book Value:</label>\n                <input name=\"bookValue\" #newValue/>\n                <button (click)=\"addBook(newName, newValue)\">Add Book</button>\n             </div>\n             <book *ngFor=\"let b of books\" [nameValue]=\"b\"></book>",
            directives: [loop_component_1.LoopComponent, book_component_1.BookComponent, common_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map