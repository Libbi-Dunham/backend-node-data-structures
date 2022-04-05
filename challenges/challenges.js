class LinkedListNode {
  #next = null;
  constructor(value) {
    // adding the value and next property represented by the node thru the constructor
    this.value = value;
    this.#next = null;
  }
  // implement the add(node) method
  add(node) {
    // seeing if there is a next property
    if (!this.#next) {
      // since there is not the node now is
      this.#next = node;
    } else {
      // assign to the next node
      this.#next.add(node);
    }
  }
  getList() {
    // no nodes?
    if (!this.#next) {
      return this.value;
      // if there is another node add it to the list
    } else {
      return this.value + this.#next.getList();
    }
  }
}
