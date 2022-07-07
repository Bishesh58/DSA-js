/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/

// Solution: 1 (one ponter)
var removeDuplicates = function (nums) {
  /* array is ascending */
  /* duplicates will always be next to each other*/
  /* we can start directly with second index, since first is always smaller and unique*/

  //start pointer on second index
  let pointer = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    //check if adjacent indices are equal
    //always nums[i] & nums[i+1]
    if (nums[i] !== nums[i + 1]) {
      //shift the pointer, and assign it's value to current index

      nums[pointer++] = nums[i + 1];
    }
  }
  return pointer;
};

removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5, 6]);
//output: 6, nums: [1,2,3,4,5,6]

// Solution: 2 with splice method,
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; ) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5, 6]);
//output: 6, nums:[1,2,3,4,5,6]

// Solution: 3 (two pointer)
var removeDuplicates = function (nums) {
  let leftPointer = 0;
  let rightPointer = 1;
  //loop until the second pointer meets the end of nums length
  while (rightPointer < nums.length) {
    if (nums[rightPointer] === nums[leftPointer]) {
      //if left and right index equal, shift right pointer by 1.
      rightPointer++;
    } else {
      //if left and right are not equal, shift left pointer by 1.
      //and assign left pointer as right pointer value
      leftPointer++;
      nums[leftPointer] = nums[rightPointer];
    }
  }
  console.log(nums);
  console.log(leftPointer + 1);
};

removeDuplicates([1, 1, 2]);
