/* Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sums to rightmost branch sums.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.



Sample Input: see Figure#1



Sample Output: [15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7


*/

/* Solution#1: Recursive Approach */
// This is the class of the input root
// Do NOT edit it.
class BinaryTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums (root) {
  // Write your code here.
  // step 1: create result empty array to store current sum
  let result = [];
  // step 2: create helper function to calculateBranchSum
  //         root, currentSum = 0, result
  calculateBranchSum(root, 0, result)
  return result;
}

function calculateBranchSum (node, currentSum, result) {
  // check if it's leaf
  if (!node) return;
  let newCurrentSum = currentSum + node.value;
  if (node.left == null && node.right == null) {
    result.push(newCurrentSum);
  }
  // call recursive function
  calculateBranchSum(node.left, newCurrentSum, result);
  calculateBranchSum(node.right, newCurrentSum, result);
}







/* Big O Explainations:
Time Complexity: O (n)
linear time, only traverse one time for each node




Space Complexity: O (n)

call stack
O(s) + n
negligible
O(n)



Space complexity is tricky. We go through every node. We have the sum and add it to the array. 

Space = O (s), where s is the number of sums that we are storing in the sums array.  You will technically be right, and we are also doing recursive calls in the algorithms, and the way recursion works is that it adds calls to the call stack that accounts for extra space, and that space is more than the number of sums that we have, because every call that we make to the call stack signifies a node in the binary tree and there are more nodes than there will ever be sums So technically, the space complexity is O(s) + n where s is the number of sums, and n is the number of nodes. But in Big O notation we tend to only take into account the largest value, so when n grows, this will be neglegible. So the actual space complexity is O(n).



*/