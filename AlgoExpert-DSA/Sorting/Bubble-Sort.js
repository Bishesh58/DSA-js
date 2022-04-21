/* 
Question: Write a function that takes in an array of integers and returns a sorted version of that array.
User the Bubble Sort to sort the array.
 Sample Input: [8, 5, 2, 9, 5, 6, 3]
 Output: [2, 3, 5, 6, 8, 9]
*/
//Solution 1: o(n^2) & o(n)
function bubbleSort(array) {
  // store in global function scope
  let isSorted = false;
  // means: i< array.length -1
  const length = array.length - 1;
  for (let i = 0; i < length; i++) {
    // counter = i
    if (isSorted) break; // break the outer loop
    isSorted = true;
    // inner loop
    for (let j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
        isSorted = false;
      }
    }
  }
  return array;
}

function swap(i, j, array) {
  // right side only cares about the left side; left side only cares about the right side.
  [array[i], array[j]] = [array[j], array[i]];
}

//Solution 2:
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        flag === true;
        let temp;
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if (flag === true) {
      break;
    }
  }
  return array;
}

//Solution 3: optimize than solution 2
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let flag = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        flag = 1;
        let temp;
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if (flag == 0) {
      break;
    }
  }
  return array;
}
