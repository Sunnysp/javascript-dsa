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
  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let temp = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  // unshift - always add node at first position
  unshift(value) {
    if (!value) throw new Error("Missing node value");
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
      this.length++;
    }
    return this;
  }
  // shift
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    temp.next = null;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  // get(index)
  get(index) {
    if (index < 0 || index >= this.length)
      throw new Error("Index out of bound. This index doesn't exist");
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  // set(index, value)
  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  // delete node
  delete(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  // reverse the linked list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp.next;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const linkedList = new LinkedList(4);
console.log("before push ");
linkedList.log();
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
console.log("after push ");
linkedList.log();
console.log("before pop ");
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log("after pop ");
linkedList.log();
console.log("before unshift");
linkedList.unshift(3);
linkedList.log();
linkedList.unshift(2);
linkedList.log();
console.log("Shift Method");
console.log(linkedList.shift());
console.log(linkedList.shift());
console.log(linkedList.shift());
linkedList.log();
console.log("get(index)");
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
console.log(linkedList.get(1));
console.log("set(index, value)");
console.log(linkedList.set(0, 4));
console.log(linkedList.set(1, 5));
console.log("Delete One Node");
console.log("before delete node ", linkedList.log());
console.log("Deleted Node at index 1", linkedList.delete(1));
console.log("reverse lisked list");
console.log("before reverse ", linkedList.log());
console.log("reverse ", linkedList.reverse());
