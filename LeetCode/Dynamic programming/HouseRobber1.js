/* 
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
 return the maximum amount of money you can rob tonight without alerting the police.

*/

//example1: nums = [1,2, 3,1]
//output: 4
// rob 1 + rob 3

//expample2: nums = [2,7,9,3,1]
//output: 12
// 2 + 9 + 3

/*
steps:
1. If empty array or null => return 0
2. If only one value => return nums[0] which is one value
3. If there are two value => return the max value between two
4. Create a empty result array to track the maximum value at current index
5. Fill the result array of 0 & 1 index as we already know what's going to be the answers
6. Start looping from the 3rd element (i = 2) of the given array
7. Find the maximum amount result array can hold upto that current index and return
    Note: take current index value + value of escaped house (i - 2, since we are at i) or take max value of result array which is adjacent to it's index => (i -1)
8. Return the maximum value at last index of result array which will be our max value

*/

//Solution 1: Memoization
var rob = function (nums) {
  if (nums.length === 0 || null) {
    return nums[0];
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let r = [];
  r[0] = nums[0];
  r[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    r[i] = Math.max(nums[i] + r[i - 2], r[i - 1]);
  }

  return r[r.length - 1];
};

// Time Complexity: O(N)
// Space Complexity: O(1)