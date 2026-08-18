class Heap {
  #heap = [];
  #indexIndicator = 1;
  constructor(isOpenedToIndex = false) {
    if (isOpenedToIndex) {
      this.#indexIndicator = 0;
    }
  }

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return 2 * index + this.#indexIndicator;
  }
  #rightChild(index) {
    return 2 * index + (1 + this.#indexIndicator);
  }
  #parent(index) {
    return Math.floor((index - this.#indexIndicator) / 2);
  }
  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }
  #sinkDown(index) {
    let maxIndex = index;
    let size = this.#heap.length;
    while (true) {
      const leftIndex = this.#leftChild(index);
      const rightIndex = this.#rightChild(index);

      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
        maxIndex = leftIndex;
      }
      if (rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]) {
        maxIndex = rightIndex;
      }
      if (maxIndex !== index) {
        this.#swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - this.#indexIndicator;
    let parent = this.#parent(current);
    while (current > 0 && this.#heap[current] > this.#heap[parent]) {
      this.#swap(current, parent);
      current = parent;
      parent = this.#parent(current);
    }
    return this.getHeap();
  }

  remove() {
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop();

    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#sinkDown(0);
    return maxValue;
  }
}

const heap = new Heap();
heap.insert(99);
heap.insert(72);
heap.insert(61);
heap.insert(58);
console.log(heap.getHeap());
console.log("=========== insert ========");
console.log(heap.insert(100));
console.log(heap.insert(75));
console.log("after insert ", heap.getHeap());

console.log("=========== remove ========");
console.log(heap.remove());
console.log(heap.remove());
console.log("after insert ", heap.getHeap());
