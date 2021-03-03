export default class BST {
  constructor() {
    this.root = null;
  }

  insertNode(insertedNode) {
    if (!this.root) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (!currentNode.left) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (!currentNode.right) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }

  search(val) {
    if (this.root.data === val) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === val) {
          return true;
        } else if (currentNode.data > val) {
          currentNode = currentNode.left;
        } else if (currentNode.data < val) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }
}