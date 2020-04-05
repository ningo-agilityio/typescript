import { NumberCollection } from './NumberCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { Sorter } from './Sorter'

// Number collection
const numbers = new NumberCollection([0, 10, -2, 5]);
numbers.sort();
console.log(numbers.data);

// Character collection
const characters = new CharactersCollection('zbay');
characters.sort();
console.log(characters.data);

// Linked list
const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-2);
linkedList.add(0);
linkedList.add(1);
linkedList.sort();
linkedList.print();
