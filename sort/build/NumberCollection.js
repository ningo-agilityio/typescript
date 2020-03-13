"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var tmp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = tmp;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
