// Problem 700: Serach in a Binary Serach Tree
/* 
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

*/

//psudo code: for while loop

//if no root exists return null
//create a current node variable and set it to root
//repeat until currentNode is Null
    //if val < currentNode val
        //set currentNode to left child
    //else if val > currentNode val
        //set currentNode to right child
    //else
        //return current node (since we found it)
//return null

var searchBST = function (root, val) {
  let currentNode = root;
  while (currentNode !== null) {
    if (val < currentNode.val) {
      currentNode = currentNode.left;
    } else if (val > currentNode.val) {
      currentNode = currentNode.right;
    } else {
      return currentNode;
    }
  }
  return null;
};

//Big O explainations:
//best case Olog(N), worst case O(n)
//since searching BST can eliminates half of the element,
//in worst case if the tree is one sided, O(n), need to traverse through all elments.

//solution using recursive function:
var searchBST = function (root, val) {
  let currentNode = root;
  if (!currentNode) return null;

  if (val < currentNode.val) {
    return searchBST(currentNode.left, val);
  } else if (val > currentNode.val) {
    return searchBST(currentNode.right, val);
  } else {
    return currentNode;
  }
  return null;
};
