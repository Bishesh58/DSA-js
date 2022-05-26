// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const results = [];

  for (let i = 0; i < arr.length; i += size) {
    results.push(arr.slice(i, i + size));
  }

  console.log(results);

  return results;
}

function chunkArrayInGroups(arr, size) {
  let pointer = 0;
  let temp = [];

  for (let i = 0; i < arr.length; i += size) {
    temp.push(arr.slice(pointer, size + pointer));
    pointer += size;
  }

  // slice = first index, last index ==> last index not included
  // splice = first index, number of element
  console.log(newAr.splice(1, 3));

  return temp;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
