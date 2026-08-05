/**
 * Doubly Linked List Node has total 3 parameters
 * value: the value of node
 * next: the next node pointer
 * prev: the previous node pointer
 * {
 * value: 3,
 * next: null,
 * prev: null
 * }
 */
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
