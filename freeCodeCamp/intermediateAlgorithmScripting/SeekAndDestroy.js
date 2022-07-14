// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// Without filter method
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

// Without spread syntax
function destroyer(arr) {
  const firstArr = arguments[0];
  const secondArr = [];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] !== arguments[0]) {
      secondArr.push(arguments[i]);
    }
  }

  console.log(firstArr);
  console.log(secondArr);

  const result = firstArr.filter((item) => !secondArr.includes(item));

  console.log(result);

  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer(['tree', 'hamburger', 53], 'tree', 53);

// With spread syntax
function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer(['tree', 'hamburger', 53], 'tree', 53);
