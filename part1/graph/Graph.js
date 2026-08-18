class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  /**
   * method: addVertex()
   * @param vertex
   * @returns true if created or else if not creates
   *
   * value of vertex is array
   *
   * @example
   * addVertex('A');
   * this.adjacencyList[A]=[];
   * return true;
   *
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  /**
   *
   * @param {*} vertex1
   * @param {*} vertex2
   * @returns true | false Boolean
   */
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  /**
   *
   * @param {*} vertex1
   * @param {*} vertex2
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2,
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1,
      );
      return true;
    }
    return false;
  }

  /**
   *
   * @param {*} vertex
   */
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return true;
  }
}

const graph = new Graph();
graph.addVertex("A");
console.log(graph);
console.log(graph.addVertex("B"));
console.log(graph);
console.log(graph.addEdge("A", "C"));
console.log(graph);

console.log("=========== Graph1 =============");
const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "C");

console.log("graph 1", graph1);
console.log("----- Removing Edge ------");
console.log(graph1.removeEdge("A", "B"));
console.log("graph1 ", graph1);

console.log("=========== Graph2 =============");
const graph2 = new Graph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("A", "D");
graph2.addEdge("B", "D");
graph2.addEdge("C", "D");

console.log("graph 2", graph2);
console.log("----- Removing Vertex ------");
console.log(graph2.removeVertex("D"));
console.log("graph 2 ", graph2);
console.log(graph2.removeVertex("E"));
