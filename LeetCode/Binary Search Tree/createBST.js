//creating Binary Search Tree.
//Binary Search Tree has left value smaller than right value.

//We create two class. Node to create node. BTS to create binary search tree
//const treeify = require("treeify"); (tree library)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);
    //case 1: let's say there is no node
    if (!this.root) {
      this.root = newNode;
    }
    //case 2: value is equal to the root
    if (this.root == value) {
      return null;
    }
    //case 3: either smaller or greater than the root node
    else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        } else if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }
      };
      searchTree(this.root);
    }
  }

  remove(value) {
    this.count--;

    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
      } else {
        //value === node.value; we found the match
        //node has one child or none child,
        if (node.right == null && node.left == null) {
          return null;
        } else if (node.left == null) {
          return node.right;
        } else if (node.right == null) {
          return node.left;
        } else {
          //node has two child, swap node val with smallest value on that node's right most child

          //find smalleset value on the node from the node right most child (smallest value will be on left side of the node's right most child) & store in a variable
          let temp = findMin(node.right);

          //swap the node with smallest value
          node.value = temp.value;

          //delete the duplicate node, since root node has the smallest value, the smallest value node still exits, so we pass smallest value to be deleted as params
          node.right = removeNode(node.right, temp.value);
          return node;
        }
      }
    };

    const findMin = (node) => {
      while (node.left != null) {
        node = node.left;
      }
      return node;
    };

    removeNode(this.root, value);
  }
}

const myBST = new BST();
myBST.insert(20);
myBST.insert(5);
myBST.insert(10);
myBST.insert(15);
myBST.insert(60);
myBST.insert(80);
myBST.insert(40);
myBST.insert(50);
myBST.insert(55);
myBST.remove(20);
//console.log(treeify.asTree(myBST, true));
console.log(myBST);
