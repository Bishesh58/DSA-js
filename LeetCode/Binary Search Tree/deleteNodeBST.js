/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
 Basically, the deletion can be divided into two stages:

1.Search for a node to remove.
2.If the node is found, delete the node.

                5               
              /  \
             3    6   
            /  \   \
           2   4    7
            

           //3 is deleted 


                5               
              /  \
             4    6   
            /     \
           2       7

 * 
 * 
 * 
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return root;
  if (key < root.val) {
    //look on left of root
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    //look on right of root
    root.right = deleteNode(root.right, key);
  } else {
    //we found the match (root.val == key)
    //there will be three cases: 1. has one child, has two child, has no child
    if (root.right === null && root.left == null) {
      return null;
    } else if (root.right == null) {
      //has only left child
      return root.left;
    } else if (root.left === null) {
      //has only right
      return root.right;
    } else {
      //has two child
      //hold right child into a variable
      let tempNode = root.right;

      //find the lowest/smallest value from the left of current node.
      while (tempNode.left) {
        tempNode = tempNode.left;
      }

      //swap the root node with smallest value,
      root.val = tempNode.val;

      //delete the swaped current node value with recursion
      root.right = deleteNode(root.right, tempNode.val);
    }
  }
  return root;
};

//time average O(log N), worst case O(N) for binary tree if is linked list.
