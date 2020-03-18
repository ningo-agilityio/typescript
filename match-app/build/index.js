"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Number collection
var numbers = new NumberCollection_1.NumberCollection([0, 10, -2, 5]);
numbers.sort();
console.log(numbers.data);
// Character collection
var characters = new CharactersCollection_1.CharactersCollection('zbay');
characters.sort();
console.log(characters.data);
// Linked list
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-2);
linkedList.add(0);
linkedList.add(1);
linkedList.sort();
linkedList.print();
