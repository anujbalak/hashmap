class HashSet {
  constructor() {
    this.buckets = new Array(16);
    this.capacity = this.buckets.length;
    this.size = 0;
    this.loadFactor = (this.capacity * 3) / 4 / this.capacity;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = Math.floor(hashCode % this.capacity);
    }
    return hashCode;
  }

  set(key) {
    if (this.size / this.capacity === this.loadFactor) {
      this.capacity *= 2;
      this.loadFactor = (this.capacity * 3) / 4 / this.capacity;
      let keyIndex = this.hash(key);
      let newNode = new Node(key);
      this.buckets[keyIndex] = newNode;
      this.size += 1;
    } else {
      let keyIndex = this.hash(key);
      let newNode = new Node(key);
      this.buckets[keyIndex] = newNode;
      this.size += 1;
    }
  }

  get(key) {
    let result;
    let index = 0;
    while (index < this.buckets.length) {
      if (this.buckets[index] !== undefined) {
        if (this.buckets[index].key === key) {
          result = this.buckets[index].key;
          return result;
        } else {
          result = `No ${key}`;
        }
      }
      index++;
    }
    return result;
  }

  has(key) {
    let result;
    let index = 0;
    while (index < this.buckets.length) {
      if (this.buckets[index] !== undefined) {
        if (this.buckets[index].key === key) {
          result = true;
          return result;
        } else {
          result = false;
        }
      }
      index++;
    }
    return result;
  }

  remove(key) {
    let result;
    let index = 0;
    while (index < this.buckets.length) {
      if (this.buckets[index] !== undefined) {
        if (this.buckets[index].key === key) {
          this.buckets.splice(index, 1);
          this.buckets.length++;
          this.size -= 1;
          result = true;
          return result;
        } else {
          result = false;
        }
      }
      index++;
    }
    return result;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.buckets.splice(0);
  }

  keys() {
    let keysArr = [];
    let index = 0;
    while (index < this.buckets.length) {
      if (this.buckets[index] !== undefined) {
        let key = this.buckets[index].key;
        keysArr.push(key);
      }
      index++;
    }
    return keysArr;
  }

  entries() {
    let arr = [];
    let index = 0;
    while (index < this.buckets.length) {
      if (this.buckets[index] !== undefined) {
        let anotherArr = [];
        let key = this.buckets[index].key;
        anotherArr.push(key);
        arr.push(anotherArr);
      }
      index++;
    }
    return arr;
  }
}

class Node {
  constructor(key = null) {
    this.key = key;
  }
}

export { HashSet };
