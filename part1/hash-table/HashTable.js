class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key = "") {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

const ht = new HashTable();
console.log(ht.set("boalts", 1000));
console.log(ht.set("nuts", 1500));
console.log(ht.set("washers", 800));
console.log(ht.set("screws", 2500));
console.log(ht.set("test", 3500));
console.log(ht.set("test1", 4000));
console.log("====== Hash Table GET methos ===========");
console.log(ht.get("boalts", 1000));
console.log(ht.get("nuts", 1500));
console.log(ht.get("washers", 800));
console.log(ht.get("screws", 2500));
console.log(ht.get("test", 2500));
console.log(ht.get("test1", 2500));
console.log("====== Hash Table KEYS methos ===========");
console.log(ht.keys());
