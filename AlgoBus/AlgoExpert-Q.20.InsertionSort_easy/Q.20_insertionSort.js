/* Insertion Sort
 Topic: Sorting Algorithm -- Insertion Sort; Difficulty: Easy

 Prompt: 
 Write a function that takes in an array of integers and returns  a SORTed version of that array. Use the Insertion Sort Algorithm to sort the array.

 
 Sample Input:
 array = [8, 5, 2, 9, 5, 6, 3]

 Sample Output:
 [2, 3, 5, 5, 6, 8, 9]

*/

// Solution#1:
function InsertionSort(array) {
  // Write your code here...
  //step#1: loop thru the given input array starting at index=1
  for ( let i = 1; i<array.length; i++){
    //pick the currentNum to Insert
    //let currentNum = array[i]
    // step#2: compare currentNum with prevNum --> prevNum = array[i-1]
    // conditional check: check every ele inside our Sorted List Array; loop thru the green array
    let j = i;
    while (j>0 && array[j] < array[j-1]) {
      //swap
      // e.g. j =3, currentNum =6, j-1, array[j-1] = prevNum = 5
      swap(j, j-1, array);
      j -=1;
    }
  }
  return array;

}

// Helper Function: 
function swap(i, j, array){
  // 1st, init a temp, temp is to hold the value /ele to be compared
  const temp = array[i];
  // 2nd, 
  array[i] = array[j];
  array[j] = temp;
}

// Helper Function:
function swap(i, j, array) {
  // right side only cares about the left side; left side only cares about the right side.
  [array[i], array[j]] = [array[j], array[i]];
}


/* BIG O Notation
Note that: Insertion Sort is NOT the Best Sorting Algorithm in terms of 'performance'.
But it is more efficient than Selection Sort and Bubble Sort

Time Complexity: 
-- Best Case: O(n) 
[2, 4, 6]
never need the while loop

-- Average Case / Worst Case
Time = O(n^2) = n*n
one inner loop
one outer loop



outer loop iteself is comparing/referencing current element with each ele inside inner loop.

and the array is the same one.

Space Complexity: 

Space = O(1)
since we do not use extra space or memory; never store extra space.

Line #25: store j to be i
line #38: swap = O(1) --> it is temp variable , but did not create extra space.

O(1) + O(1) ==> O(1)

*/

// Solution#2: by Ray
function insertionSort( array ) {
  for ( let i = 1; i < array.length; i++) {
    
    for ( let j = i; j > 0; j-- ) {
      //let curNum = array[ j ];
      if ( array[ j ] < array[ j - 1 ] ) {
        [ array[ j ], array[ j- 1 ] ] = [ array[ j - 1 ], array[ j ] ];
      } else {
        break
      }
    }
    
  }
  return array;
}

