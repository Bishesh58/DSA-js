// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // Should not modify the original arrays
  // Merge the first array into the second array starting with the index n

  const newArray = [...arr2];

  let position = n;
  for (let i = 0; i < arr1.length; i++) {
    newArray.splice(position, 0, arr1[i]);
    position += 1;
  }

  return newArray;
}

frankenSplice([1, 2, 3], [4, 5], 1);
