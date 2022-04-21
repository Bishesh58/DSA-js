/* Binary Search

Topic: Binary Search; Difficulty: Easy

Prompt:

Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search Algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise '-1'.



Sample Input:
array = [ 0, 1, 21, 33, 45, 45, 61, 71, 72, 73 ]
target = 33

Sample Output:
3

*/

// Solution#1: no helper function
function binarySearch (array, target) {
  // write your code here...
  // step#1:init pointers 
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  // step#2: while loop
  while(leftPointer <= rightPointer) {
    //step#2.1] calcaulte the middlePointer using the below formula
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    // step#2.1] create an intermediate variable to compare with the targetNum
    let middleNum = array[middlePointer];
    
    // step#2.2] we need 3 things: 1) check if the middleNum equal to targetNum; 2) not equal, target > middleNum; 3) not equal, target < middleNum
    if(middleNum === target) {
      return middlePointer
    };
    // step#2.2.b] check if middleNum > target; 
    if(middleNum > target) {
      // need a Smaller Number, move rightPointer to left side of the middlePointer by 1
      rightPointer = middlePointer - 1;
    };
    
    // step#2.2.c] check if middleNum < target
    if(middleNum < target) {
      // need a Bigger Number, move leftPointer to right side of the middlePointer by 1
      leftPointer = middlePointer + 1;
    };
    
  };

  return -1;

}



/* Big O Notation Explainations:

Time Complexity: O(log(N))
when you eleminate the search results , 
if it is a sorted, log(N)
where N is the number of the input array


extra bonus: the other two O(log(N)) for searching:
bubble Sort: O(n^2)
linear search: O(n)
heap search: O(n*log(N))
insertion sort: O(n^2)
selection sort: O(n^2)
quick sort: O(nlog(N))
merge sort: O(nlog(N))

Space Complexity: 
O(1): it is constant time. not required to store anything in the temporary space

*/

// Solution#2: half -correct: recursion solution
/*
recursive approach:
step#1: identify Base Case: 

BOOM!!!

*/
function binarySearch(array, target) {
  // Write your code here.
  // base case
  if (!array.length) return -1

  // step#1: init pointers
  let [left, right] = [0, array.length -1]


  // step#2: calculate the middleNum using the formula
    const middle = Math.floor((left + right) / 2);
    // step#2.1: to see if the middleNum == potentialMatch
    const potentialMatch = array[middle];
    // step#3: conditional check: if the target equal to ponetinalMatch, return middleNum
  if (target === potentialMatch) return middle;
  // step#3.a] if the potentail < target, call the 'recursion function' named 'binarySearch'

	if (potentialMatch < target) {
    // [0,1, 21, 33, 45, 45, 61, 71, 72, 73]
    //=> arr.slice makes a new copy reassign the newArray
    //=> newArray = from 0 to index=4, the lastEle is excluded
    //=> newArray = [0, 1, 21, 33]; target = 33
    //=> binarySearch([0,1,21,33], 33)//=>we call the recursion binarySearch again and again until we found the target number = 33.
		return binarySearch(array.slice(0, middle - 1), target);
  }
  // step#3.b] if the potentail > target, call the 'recursion function' named 'binarySearch'

  // [0,1, 21, 33, 45, 45, 61, 71, 72, 73]
    //=> arr.slice makes a new copy reassign the newArray
    //=> newArray = from lastEle but excluded to index=4, the lastEle is excluded
    //=> newArray = [0, 1, 21, 33]; target = 33
    
    //=> binarySearch([0,1,21,33], 33)//=>we call the recursion binarySearch again and again until we found the target number = 33.
	if (potentialMatch > target) {
		return binarySearch(array.slice(-1, middle + 1 ), target);
  }
  
}

// Solution#3: recursion function with helper function by Emran

function binarySearch (nums, target) {
  // create a helper function // define your helper function   
  var binarySearchHelper = (nums, target, leftPointer, rightPointer) => {
    
    // Base Case for the recursion
    if(leftPointer > rightPointer) return -1;
       
  
    // calcualte the middlePointer using the formula
    var middlePointer = Math.floor((leftPointer + rightPointer)/2);
    
    // conditional check: a.] if middleNum > targetNum,
    //=>define the helper recursion binarySearchHelper: 1)array 2) target 3) leftPointer 4) rightPointer
    if(nums[middlePointer] > target) {
      // then, move the rightPointer to the left side of the middlePointer by 1
      return binarySearchHelper(nums, target, leftPointer, middlePointer-1);
    } // b.] if middleNum < targetNum, move leftPointer to the right of the middlePointer by 1
    else if(nums[middlePointer] < target){
      return binarySearchHelper(nums, target, middlePointer+1, rightPointer);
    } // c.] seneria #3: middleNum == targetNum, return => the middlePointer
    else {
      return middlePointer;
    }
  }
  
  // call the helper function here...
  return binarySearchHelper(nums, target, 0, nums.length -1);
  
};


// Solution#3.2: recursive helper function outside
function binarySearch (nums, target) {
  
  // call the helper function here...
  return binarySearchHelper(nums, target, 0, nums.length -1);
  
};

// create helper function outside the parent function
function binarySearchHelper (nums, target, leftPointer, rightPointer) {
    
  // Base Case for the recursion
  if(leftPointer > rightPointer) return -1;
     

  // calcualte the middlePointer using the formula
  var middlePointer = Math.floor((leftPointer + rightPointer)/2);
  
  // conditional check: a.] if middleNum > targetNum,
  //=>define the helper recursion binarySearchHelper: 1)array 2) target 3) leftPointer 4) rightPointer
  if(nums[middlePointer] > target) {
    // then, move the rightPointer to the left side of the middlePointer by 1
    return binarySearchHelper(nums, target, leftPointer, middlePointer-1);
  } // b.] if middleNum < targetNum, move leftPointer to the right of the middlePointer by 1
  else if(nums[middlePointer] < target){
    return binarySearchHelper(nums, target, middlePointer+1, rightPointer);
  } // c.] seneria #3: middleNum == targetNum, return => the middlePointer
  else {
    return middlePointer;
  }
}


/* Big O Notation Explainations: for recursive solution

Time Complexity: O(log(N))
move pointers around, reduce the search window by half through each call/pass.




Space Complexity: for recursive solution
https://stackoverflow.com/questions/40567734/should-we-consider-recursive-call-stack-as-auxiliary-space

O(log(N)): the criteria is based on the call stack, the call stack grows logarithmically , the space will increase each function call

*/