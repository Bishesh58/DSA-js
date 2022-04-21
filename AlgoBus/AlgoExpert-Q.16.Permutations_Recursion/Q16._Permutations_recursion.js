/* Permutations

Topic: Recursion; Difficulty: Intermediate

Prompt:

Write a function that takes in an array of 'unique integers' and returns an array of 'all permutations of those integers' in no particular order.

if the input array is empty, the function should return an empty array.

Sample Input:
array = [ 1, 2, 3 ]

Sample Output:
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]

]

*/

function getPermutations (nums, set =[], answers =[]) {
  // Base Case: set
  if(!nums.length && set.length) {
    answers.push([...set]);
  }

  // iterate
  for(let i = 0; i < nums.length; i ++) {
    // Remove the currentNum //=> currentNum = 1
    const newNums = nums.filter((n, index) => index!== i); //=> newNums = [2,3]
    // push the currentNum 
    set.push(nums[i]); //=>nums[0] =1 //=> set = [1]
    // recursive call happened, make recursive call with the updated numsArray
    getPermutations(newNums, set, answers);
    // Remove the last ele
    set.pop(); // backtracking...// => remove last ele in set array //=> since set array is empty....
  }
  return answers;
}


/* Big O Notation Explainations:

Time Complexity: O(N)
O(n!*n^2)
for ...loop is outer loop;
filter ...loop is inner loop;
replace the filter loop using --> with slice --> will reduce (n^2) to (n)

[filter, map, reduce ]--> iterate every element in the array.
slice is more efficient





Space Complexity: O(d)
O(n!*n)

keep track of the outer array, every copy of the array in the recursion, exponetial

*/





// Solution#2: O(N!*N)
function getPermutations(array) {
  // Write your code here.
	const permutations = [];
	permutationsHelper(array, [], permutations);
	return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
	if (!array.length && currentPermutation.length) {
		permutations.push(currentPermutation);
	} else {
		for (let i = 0; i < array.length; i++) {
			const newArray = array.slice(0, i).concat(array.slice(i + 1));
			const newPermutation = currentPermutation.concat([array[i]]);
			permutationsHelper(newArray, newPermutation, permutations);
		}
	}
}

// Solution#3: swap O(!n * n) || 
function getPermutations(array) {
  // Write your code here.
	const permutations = [];
	permutationsHelper(0, array, permutations);
	return permutations;
}

function permutationsHelper(i, array, permutations) {
	if (i === array.length - 1) {
		permutations.push(array.slice());
	} else {
		for (let j = i; j < array.length; j++) {
			swap(i, j, array);
			permutationsHelper(i + 1, array, permutations);
			swap(i, j, array);
		}
	}
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
