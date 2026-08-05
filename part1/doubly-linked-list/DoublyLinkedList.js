import { Node } from "./Node.js";

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
  log() {
    console.log(this);
  }
  // push
  push() {}
}

const doublyLinkedList = new DoublyLinkedList(3);
doublyLinkedList.log();
