"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CustomNode = /** @class */ (function () {
    function CustomNode(data) {
        this.data = data;
        this.next = null;
    }
    return CustomNode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Tail of this node is head of next node
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var counter = 1;
            var node = this.head;
            while (node) {
                counter++;
                node = node.next;
            }
            return counter;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        var node = new CustomNode(data);
        // List is empty
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        // Add to the end of list
        tail.next = node;
    };
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            // if (counter === this.length - 1) {
            //   break;
            // }
            counter++;
            if (!!node.next) {
                node = node.next;
            }
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        // if (!this.head) {
        //   throw new Error("Index out of bounds");
        // }
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var tmp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = tmp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
