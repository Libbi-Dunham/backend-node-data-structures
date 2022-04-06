// challenge 1 getList();
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

// challenge 2 binary node add
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value === this.value) {
      return;
    }
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}
// different ways I tried
//     add(node, newNode) {
//       if (newNode.value < node.value) {
//         if (!node.left) node.left = newNode;
//         else this.add(node.left, newNode);
//       } else {
//         if (!node.right) node.right = newNode;
//         else this.add(node.right, newNode);
//       }
//     }
//   }
//     add(node) {
//         return (this.value > node.value) ? (!this.left ? this.left = node : this.left.add(node)
//         ) : (
//             !this.right ? this.right = node : this.right.add(node)
//         )
//     }
// }
