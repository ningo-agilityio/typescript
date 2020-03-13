"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
// Number collection
var sorter = new Sorter(new NumberCollection_1.NumberCollection([0, 10, -2, 5]));
sorter.sort();
console.log(sorter.collection);
// Character collection
var sorter2 = new Sorter(new CharactersCollection_1.CharactersCollection('zbay'));
sorter2.sort();
console.log(sorter2.collection);
