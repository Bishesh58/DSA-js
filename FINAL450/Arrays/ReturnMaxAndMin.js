// Math object
function findMaxAndMin(arr) {
  console.log('Minimum element is ' + Math.min(...arr));
  console.log('Maximum element is ' + Math.max(...arr));
}

findMaxAndMin([1, 2, 3, 4, 5]);

// Without Math object
// function findMaxAndMin(arr) {
//   let min = 0;
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }

//     if (min >= arr[i]) {
//       min = arr[i];
//     }
//   }

//   // Time Complexity O(n)

//   console.log('Minimum element is ' + min);
//   console.log('Maximum element is ' + max);
// }

// findMaxAndMin([4, 2, 6, 1, 5, 10, 100]);
