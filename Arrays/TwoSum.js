/*
 Question: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 if any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
 If no two numbers sum up to the target sum, the function should return an empty array.

 Note that the target sum has to be obtained by summing two different integers in the array; you cann't add a single integer to
 itself in order to obtain the target sum.
 You can assume that there will be at most one pair of numbers summing up to the target sum.
*/

//solution 1: This solution is only for sorted array(leetcode question) but this question is not sorted array
// [2,7,11,15]
//  l      R
var twoSum = function(numbers, target) {
    leftPointer = 0;
    rightPointer = numbers.length - 1;

    while( leftPointer <=  rightPointer){
        let sum = numbers[ leftPointer] + numbers[ rightPointer]
        if(sum === target){
            return [ leftPointer + 1,  rightPointer + 1]
        } else if( sum < target){
             leftPointer++;
        } else{
             rightPointer--;
        }
    }
    return null;
};


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


//solution 3: 