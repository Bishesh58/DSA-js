// Problem 701. Insert into a Binary Search Tree

/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

*/

/* Note: if root is null, we create new node and return;
 to create new node, TreeNode(val) which is given as root
 let node = new TreeNode(val)
 taking into consideration that we either have val > than root.val or val < root.val, 
 so using double if statement into the while loop;
 "if we use 'if else' inside while loop it will not work!"
*/

//Solution 1: recursively
var insertIntoBST = function (root, val) {
  //assign currentNode to root node
  let currentNode = root;
  if (currentNode == null) {
    return new TreeNode(val);
  }
  if (val < currentNode.val) {
    currentNode.left = insertIntoBST(currentNode.left, val);
  } else {
    currentNode.right = insertIntoBST(currentNode.right, val);
  }

  return root;
};

//Solution 1: Iterative solution

var insertIntoBST = function (root, val) {
  let node = new TreeNode(val);

  if (root == null) {
    return node;
  }

  let current = root;

  while (true) {
    if (val < current.val) {
      if (current.left === null) {
        current.left = node;
        break;
      } else {
        current = current.left;
      }
    }
    if (val > current.val) {
      if (current.right === null) {
        current.right = node;
        break;
      } else {
        current = current.right;
      }
    }
  }

  return root;
};
