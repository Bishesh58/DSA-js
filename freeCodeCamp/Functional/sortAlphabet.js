/*-----------------examples-------------------*/
function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
//output: [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(["l", "h", "z", "b", "s"]);
//output: ['z', 's', 'l', 'h', 'b']

/*-----------------question-------------------*/

//Q. Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.

function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//output: [ 'a', 'a', 'c', 'd', 'g', 'z' ]
