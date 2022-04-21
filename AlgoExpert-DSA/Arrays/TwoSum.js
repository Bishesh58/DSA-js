/*
 Question: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 if any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
 If no two numbers sum up to the target sum, the function should return an empty array.

 Note that the target sum has to be obtained by summing two different integers in the array; you cann't add a single integer to
 itself in order to obtain the target sum.
 You can assume that there will be at most one pair of numbers summing up to the target sum.
*/

//solution 1: Assuming it is a sorted array(leetcode question) O(nlog(n)) time | O(n) space

function twoNumberSum(array, targetSum) {
    // sort the array first
    array.sort((a, b) => a - b);
    leftPointer = 0;
    rightPointer = array.length - 1;
  
      while(leftPointer <=  rightPointer){
          let sum = array[leftPointer] + array[rightPointer]
          if(sum === targetSum){
              return [array[leftPointer],  array[rightPointer]]
          } else if(sum < targetSum){
               leftPointer++;
          } else{
               rightPointer--;
          }
      }
      return [];
}


//solution 2: This solution is based on distinct array (not sorted array) using two for loops
// O(n^2) time | O(1)

function twoNumberSum(array, targetSum) {
	//using two for loops
	// [3, 5, -4, 8, 11, 1, -1, 6]
	//  i  j
	for( let i = 0; i < array.length - 1; i++){
		let firstNum = array[i];
		
		for(let j = i + 1; j < array.length; j++){
			let secondNum = array[j]
			if(firstNum + secondNum === targetSum){
			return [firstNum, secondNum];
		  }
	  }
	}
	return []
}


//solution 3: using hash table O(n) time | O(n) space


