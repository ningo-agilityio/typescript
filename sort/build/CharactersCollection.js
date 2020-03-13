"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        this.data = this.data.replace(this.data[leftIndex], '_').replace(this.data[rightIndex], this.data[leftIndex]).replace('_', this.data[rightIndex]);
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
