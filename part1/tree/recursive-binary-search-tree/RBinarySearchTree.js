import RNode from "./RNode.js";

class RBinarySearchTree {
  constructor() {
    this.root = null;
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new RNode(value);
    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
      return currentNode;
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
      return currentNode;
    }
    return currentNode;
  }

  #rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (currentNode.value === value) return true;
    if (value < currentNode.value) {
      return this.#rContains(value, currentNode.left);
    } else if (value > currentNode.value) {
      return this.#rContains(value, currentNode.right);
    }
  }

  #minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;
    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.#minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }
    return currentNode;
  }

  insert(value) {
    if (this.root === null) this.root = new RNode(value);
    this.#rInsert(value);
  }
  contains(value) {
    return this.#rContains(value);
  }
  minValue() {
    return this.#minValue(this.root);
  }
  delete(value) {
    this.root = this.#deleteNode(value, this.root);
  }
}

export default RBinarySearchTree;

const rbst = new RBinarySearchTree();
rbst.insert(2);
rbst.insert(1);
rbst.insert(3);

console.log(rbst.contains(1));
console.log(rbst.contains(4));
console.log(rbst.minValue());
rbst.delete(2);
console.log("rbst ", rbst);
