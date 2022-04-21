/* Find Closest Value in BST

Write a function that takes in a Binary Search Tree(BST) and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will ONLY be one closest value.

Each BST node has an integer value, a left child node, and a right node. A node is said to be a valid BST node if and Only If it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None /null.

Sample Input: see figure#1


Sample Output: 13

 
 */

function findClosestValueInBst (tree, target) {
  // Write your code here...
  // step#1: init closetValue
  var closestValue = tree.value;
  var currentNode = tree; 


  // compare the currentNode with the targetValue
  //==> check as long as it is not eqaul to null --> edge case
  while (currentNode !== null) {
    //check closestValue === target 
    if(closestValue === target) {
      break;
    }
    // init variables for TWO differences
    var currentDifference = Math.abs(currentNode.value - target);
    var smallestDifference = Math.abs(closestValue - target);

    // compare the two difference, edge case
    if( currentDifference < smallestDifference){
      // if true, reassign the closestValue 
      closestValue = currentNode.value;
    }
    // to decide which node direction to traverse?
    if(target < currentNode.value) {
      // we need a smaller number => go Left
      //=> synatx show how to reassign the currentNode to be the childnNode
      currentNode = currentNode.left;
    } else {
        // move to the Right
        currentNode = currentNode.right;
    }
    

  }
  return closestValue;
}

// Thi is the class of the input tree. Do not edit.
class BST {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}


//Solution#2: Recursive Solution
// Solution#2: Big O | Time Complexity: O log(n)
// Space Complexity: worst case; O(n), average log(n)
function findClosestValueInBst (tree, target) {
  return findClosestValHelper(tree, target, tree.value)
}
// define a helper function
function findClosestValHelper(tree, target, closest) {

  if (tree === null || closest === target) {
    return closest;
  }

  // compare the tree.value with the targetValue
  //==> check as long as it is not eqaul to null --> edge case
  // base case
  
   
    // init variables for TWO differences
    var currentDifference = Math.abs(tree.value - target);
    var smallestDifference = Math.abs(closest - target);

    // compare the two difference, edge case
    if(currentDifference < smallestDifference){
      // if true, reassign the closest 
      closest = tree.value;
    }
    // return a new instance of the helper function
    if(target < tree.value) {
      // return helper function
      //=> synatx show how to reassign the currentNode to be the childnNode
      //==> recursive
      return findClosestValHelper(tree.left, target, closest)
    } else {
        // move to the Right
        // ===> recursive
      return findClosestValHelper(tree.right, target, closest)
    }
    
}


// Thi is the class of the input tree. Do not edit.
class BST {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}



/* Big O Explainations: 
Time Complexity:
Average: Olog(n) 
where n is the number of Nodes in the BST


worst: O(n)

Space Complexity: 
O(1)

worst: O(1) -- constant space, how much memory you use in your algorithm.

where n is the number of nodes in the BST.


*/