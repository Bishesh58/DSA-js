/* Product Sum

Topic: Recursion; Difficulty: Easy

Prompt:
Write a function that takes in a "special" array and returns its 'product sum'.

A 'special' array is a non-empty array that contains either integers or other 'special' arrays. The 'Product Sum' of a 'special' array is 'the sum of its elements', where 'special' arrays inside it ==> are summed themselves and then multiplied by 'their level of depth'.

The depth of a 'special' array is:  how far nested it is. 
For instance, 
the depth of [ ] is '1';

the depth of the 'inner array' in [[ ]] is '2';
the depth of the 'innermost array' in [ [ [ ] ] ] is '3'.

Therefore, the 'Product Sum' of [x, y] is 'x + y'; 
the 'Product Sum' of [x, [y,z]] is: x + 2 * (y + z);
the 'Product Sum' of [x, [y, [z]]] is: x + 2 * (y + 3z)


Sample Input: 
array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]


Sample Output:
12 // calculated as:
5 + 2 + 2 * (7-1) + 3 + 2*(6 +3 *(-13 +8) +4)

*/

// Tip: You can use the 'Array.isArray' function to check whether an item is a 'List' or 'an Integer'

function productSum(array, depth = 1) {
  // Write your code here...
  // step#1: init variables, && depth: which we use es6 default para.
  let sum = 0;
  //step#2: for loop
  for (let i = 0; i < array.length; i++) {
    // step#2.1: conditional check: ==>  check an ele is a number or not?
    if (Number.isInteger(array[i])) {
      // a.] if yes, add number to our sum
      sum += array[i];
    }
    // b.] if not a number, but is an array exist in the array
    // ==> call 'recursion function"
    if (Array.isArray(array[i])) {
      // add all the numbers in the array and multiply by the 'current depth'
      // ==> the child depth will always 1 bigger than parent depth
      sum += (depth + 1) * productSum(array[i], depth + 1);
    }
  } // return the result sum, outside the for loop:
  return sum;
}

function productSum(arr, depth = 1) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc + (depth + 1) * productSum(val, depth + 1);
    } else {
      return acc + val;
    }
  }, 0);
}

/* Big O Notation Explainations:

Time Complexity: O(N)
N is the all the elements in the array, including all the elements in the sub-arrays


Space Complexity: O(d)
d is the greatest depth of (the height of the binary tree branch) the 'sub-array' , sum of 'd' in the call stack.
call stack: 
1st: 1
2nd: 2
3rd: 3



*/

// Solution#2: use while... loop
function productSum(array, depth = 1) {
  // Write your code here...
  // step#1: init variables, && depth: which we use es6 default para.
  let sum = 0;
  //step#2: while loop
  let index = 0;
  while (index < array.length) {
    // step#2.1: conditional check: ==>  check an ele is a number or not?
    if (Number.isInteger(array[index])) {
      // a.] if yes, add number to our sum
      sum += array[index];
    }
    // b.] if not a number, but is an array exist in the array
    // ==> call 'recursion function"
    if (Array.isArray(array[index])) {
      // add all the numbers in the array and multiply by the 'current depth'
      // ==> the child depth will always 1 bigger than parent depth
      sum += (depth + 1) * productSum(array[index], depth + 1);
    }
    index++;
  } // return the result sum, outside the for loop:
  return sum;
}
// Solution#2.5 while loop solution
function productSum(array, depth = 1, sum = 0) {
  // Write your code here.
  let runningSum = 0;
  for (const input of array) {
    if (Number.isInteger(input)) sum += input;
    if (Array.isArray(input)) {
      sum += (depth + 1) * productSum(input, depth + 1);
    }
  }
  return sum;
}

// Solution#3: using reduce solution by Owen
function productSum(arr, depth = 1) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc + (depth + 1) * productSum(val, depth + 1);
    } else {
      return acc + val;
    }
  }, 0);
}
