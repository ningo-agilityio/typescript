"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomNode = /** @class */ (function () {
    function CustomNode(data) {
        this.data = data;
        this.next = null;
    }
    return CustomNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // Tail of this node is head of next node
        this.head = null;
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
}());
exports.LinkedList = LinkedList;
