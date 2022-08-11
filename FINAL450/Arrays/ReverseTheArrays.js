// First, initialise start and end indexes as start = 0, end = n-1
// Second, in a loop, swap arr[start] with arr[end] and change start and end as follows :
// start = start +1, end = end – 1

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

// Time Complexity O(n)

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([4, 5, 1, 2]));
console.log(reverseArray(['a', 'b', 'c']));
