// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// For loop
function sumAll(arr) {
  // Find how to loop through the elements inside the arr
  // Then sum all of them
  // Should work vice versa

  const newArray = [...arr];
  const sortedArray = newArray.sort((a, b) => b - a);

  // newArray = [4, 1];

  let sum = 0;
  for (let i = sortedArray[0]; i >= sortedArray[1]; i--) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// While loop
function sumAll(arr) {
  // 4 and 1
  // 1 , 1+2 =3, 3+3 = 6, 6+4=10;
  let sum = 0;
  arr.sort((a, b) => a - b);
  while (arr[0] <= arr[1]) {
    //first index is smaller,
    sum += arr[0];
    arr[0]++;
  }
  return sum;
}

sumAll([1, 4]);
