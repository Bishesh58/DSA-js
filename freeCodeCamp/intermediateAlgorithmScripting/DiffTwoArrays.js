// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// Using filter method
function diffArray(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];

  return combinedArray.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
