import Node from "./Node.js";
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
   * @param value
   *
   * Steps to Insert a new Node
   *
   * First: create new Node.
   *
   * if < left else > right.
   *
   * if null insert new Node else move to next and compare
   *
   * Steps in pseudocode
   *
   * 1. create newNode
   * 2. if root === null then this.root = newNode
   * 3. let temp = this.root
   * 4. while loop
   *    5. if newNode === temp return undefined (if newMode already exists in tree)
   *    6. if < left else > right
   *    7. if null insert newNode else move to next
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode === temp) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  /**
   * @param value
   *
   * if root is null return false
   *
   * let temp = this.root
   *
   * while(temp){
   *      if < left
   *      else if > right
   *      else return true
   * }
   *
   * return false
   */
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

export default BinarySearchTree;

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(1);
console.log(JSON.stringify(bst.insert(2)));

console.log("Contains 5 ", bst.contains(5));
console.log("Contains 6", bst.contains(6));
console.log("Contains 2 ", bst.contains(2));
console.log("Contains 27 ", bst.contains(27));
console.log("Contains 0 ", bst.contains(0));

const t = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: { value: 2, left: null, right: null },
      },
      right: { value: 4, left: null, right: null },
    },
    right: null,
  },
};
