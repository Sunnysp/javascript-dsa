import { Node } from "./Node.js";
class LinkedList {
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
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // pop
  pop() {}
}

const linkedList = new LinkedList(4);
linkedList.push(5);
linkedList.log();
