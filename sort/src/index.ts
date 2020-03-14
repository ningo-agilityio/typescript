import { NumberCollection } from './NumberCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number):void;
}

class Sorter {
  constructor(public collection: Sortable) {
  }

  sort(): void {
    const length = this.collection.length;
    for(let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
      
    }
  }
}

// Number collection
const sorter = new Sorter(new NumberCollection([0, 10, -2, 5]));
sorter.sort();
console.log(sorter.collection);

// Character collection
const sorter2 = new Sorter(new CharactersCollection('zbay'));
sorter2.sort();
console.log(sorter2.collection);

// Linked list
const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-2);
linkedList.add(0);
linkedList.add(1);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
