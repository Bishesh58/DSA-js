// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// With sort method
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      position++;
    }
  }

  return position;
}

getIndexToIns([40, 60], 50);

// Bubble sort
function getIndexToIns(arr, num) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      position++;
    }
  }

  return position;
}

getIndexToIns([40, 60], 50);
