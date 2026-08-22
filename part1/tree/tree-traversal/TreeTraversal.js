import BinarySearchTree from "../binary-search-tree/BinarySearchTree.js";

class TreeTraversal extends BinarySearchTree {
  constructor() {
    super();
  }
  /**
   * 1. queue = []
   *
   * 2. results = []
   *
   * 3. Always initialise the queue with rootNode
   *      queue.push(this.root)
   *
   * while(queue.length){
   *
   * 1. shift each element from queue
   *      currentNode = queue.shift()
   * 2. push the shift node value to results array
   *      result.push(currentNode.value)
   * 3. Check if currentNode has left node, then push that to queue
   *      if(currentNode.left) queue.push(currentNode.left)
   * 4. Check if currentNode has right node, then push that to queue
   *      if(currentNode.right) queue.push(currentNode.right)
   * }
   */
  bfs() {
    if (this.root === null) return [];
    let queue = [];
    let results = [];
    queue.push(this.root);
    while (queue.length) {
      const currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }
  /**
   * We will use recursion for this
   *
   * Depth First Search PreOrder
   *
   * We will first traverse all left nodes and then right node
   * So we will start from root and then its first left node and again left node of that.
   * If next left node is null then we will start traverse right node and return parent node and
   * traverse the right node and finally we will reach to root node and then we will start traversing the
   * right node of root node
   *
   *  This DFS Preorder is Left Node First Traversing
   *
   * 1. results = []
   *
   * 2. traverse(currentNode){
   *    1. results.push(currentNode.value)
   *    2. if there is left node then traverse(current.left) recursing call
   *    3. if there is right node then traverse(current.right) recursing call
   * }
   *
   * finally return the results
   */
  dfsPreorder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  /**
   * We will use recursion for this
   *
   * Depth First Search PreOrder
   *
   * We will first traverse first left node and then right node
   * So we will start from root and then its first left side and once finish the entire left side will start right side of root.
   * rootNode => leftNode1 => leftNode1.1 => left=null and right=null => return the node value to results
   * and move to leftNode1 => rightNode1.1 => left = null and right = null => push node value to results and move to leftNode1
   * => push node value to results and move to rootNode => rightNode1 => leftNode1.1 => left=null and right=null => return the node value to results
   * and move to rightNode1 => rightNode1.1 => left = null and right = null => push node value to results and move to rightNode1
   * => push node value to results and move to rootNode => push the rootNode value to results
   *
   *  This DFS Preorder is Left Node First with left and right Traversing
   *
   * 1. results = []
   *
   * 2. traverse(currentNode){
   *    1. if there is left node then traverse(current.left) recursing call
   *    2. if there is right node then traverse(current.right) recursing call
   *    3. results.push(currentNode.value)
   * }
   *
   * finally return the results
   */
  dfsPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  dfsInorder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

const treeTraversal = new TreeTraversal();
treeTraversal.insert(47);
treeTraversal.insert(21);
treeTraversal.insert(76);
treeTraversal.insert(18);
treeTraversal.insert(27);
treeTraversal.insert(52);
treeTraversal.insert(82);

console.log(treeTraversal.bfs());
console.log(treeTraversal.dfsPreorder());
console.log(treeTraversal.dfsPostOrder());
console.log(treeTraversal.dfsInorder());
