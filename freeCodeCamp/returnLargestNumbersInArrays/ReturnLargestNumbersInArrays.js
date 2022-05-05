// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// First loop through sub-arrays
// Then, find out which one is the biggest one
// Put those values into an array
// Return that array

// function largestOfFour(arr) {
//   let myNum = 0;
//   let newArry = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i; j < arr[i].length; j++) {
//       myNum = Math.max(...arr[j]);
//       if (!newArry.includes(myNum)) {
//         newArry.push(myNum);
//       }
//     }
//   }
//   return newArry;
// }

// Without built in Math.max method
function largestOfFour(arr) {
  // Declare variable to hold the lowest value
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let maxValue = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      // Update if found highest value
      if (maxValue < arr[i][j]) {
        maxValue = arr[i][j];
      }
    }
    newArr.push(maxValue);
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
