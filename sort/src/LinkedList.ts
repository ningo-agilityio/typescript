class CustomNode {
  next: CustomNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  // Tail of this node is head of next node
  head: CustomNode | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node: CustomNode | null = this.head;

    while(node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  add(data: number): void {
    const node = new CustomNode(data);

    // List is empty
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while(tail.next) {
      tail = tail.next;
    }

    // Add to the end of list
    tail.next = node;
  }
  
  at(index: number): CustomNode {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: CustomNode | null = this.head;

    while (node) {
      if(counter === index) {
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
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number) {
    // if (!this.head) {
    //   throw new Error("Index out of bounds");
    // }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const tmp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = tmp;
  }

  print():void {
    if (!this.head) {
      return;
    }

    let node: CustomNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

