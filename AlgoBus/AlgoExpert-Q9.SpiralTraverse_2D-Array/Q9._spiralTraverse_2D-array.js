/* Spiral Traverse - 2D Array
Write a function that takes in an 'n X m' two-dimensional array (that can be square-shaped when n==m ) and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the 'Top Left Corner' of the two-dimensional array, goes to the Right, and proceeds in a spiral pattern all the way until every element has been visited.

Sample Input:
result = []
array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]


Sample Output:
[1, 2, 3, 4,| 5, 6, 7,| 8, 9, 10, |11, 12,| 13, 14,| 15, 16]


*/

// Solution#1: Iterative Approach

function spiralTraverse (array) {
  // step#1: 
 const result = [];
 // initializing variables
 let startRow = 0;
 let endRow = array.length -1;
 let startCol = 0
 let endCol =array[0].length -1; 

 // start outer while loop
 // We need while loop to iterate through each row and column n x m array
 while ( startRow <= endRow && startCol <= endCol){
        // 1st For loop
       // get the first row of the array
       for(let col = startCol; col <= endCol; col++){
            result.push(array[startRow][col]);
       }
       // 
       startRow++;
       
       // 2nd For loop
       for(let row = startRow; row <= endRow; row++){
        result.push(array[row][endCol]);
   }
    endCol--;
    
    // 3rd For Loop
    //==> We want to check that after we append the last element in the last row
    // and the first column element, we then push that into the array & thus decrement the row.  We
    // need to check that as we close the gap between the last row & beginning row that they do not 
    //  pass each other.
    if (startRow <= endRow) {

    
    for(let col = endCol; col >= startCol; col--){
      result.push(array[endRow][col]);
 }
    endRow--;
}
    // 4th For Loop
    // ==> We need to check that as we increment the first column towards the last column that we do not 
    // exceed the last column.
    if (startCol <= endCol) {

    
    for(let row = endRow; row >= startRow; row--){
      result.push(array[row][startCol]);
  }
      startCol++
 
}
 }
  return result; 
}

/* Big O Notation Explainations:
Time Complexity: O (N)
Run O (N) Time, N is the total number of elements in the entire two Dimensional Array, you traverse every single value ONCE.



Space Complexity: O(n) 
--> linear graph: is O(n)
Run O(N) Space, we store all N value in another array if we solve this iteratively in theory


--> if we do it recursively, there is gonna be a little bit of space, used by the function calls on the call stack, the recursive calls. But if we return ==> n values then even the recursive solution does not affect the space complexity. --> so we just left with O of N space.
 
*/

/*
// Solution #2: Recursive Approach
function spiralTraverse(array) {
  // init empty array
  let result = [];

  // initializing variables
 let startRow = 0;
 let endRow = array.length -1;
 let startCol = 0
 let endCol =array[0].length -1; 

 // call the helper function 
 traversal (array, startRow, endRow, startCol, endCol, result);


  return result; 


}

// Helper Function
function traversal(array, startRow, endRow, startCol, endCol, result) {
  // ==> base case
  //conditional check
  if( startRow > endRow || startCol > endCol){
    // exit the function
    return;
  }

  // 4 for loops
 for(let col = startCol; col <= endCol; col++){
      result.push(array[startRow][col]);
 }
 // 
 startRow++;
 
 // 2nd For loop
 for(let row = startRow; row <= endRow; row++){
  result.push(array[row][endCol]);
}
endCol--;

// 3rd For Loop
//==> We want to check that after we append the last element in the last row
// and the first column element, we then push that into the array & thus decrement the row.  We
// need to check that as we close the gap between the last row & beginning row that they do not 
//  pass each other.
if (startRow <= endRow) {


for(let col = endCol; col >= startCol; col--){
result.push(array[endRow][col]);
}
endRow--;
}
// 4th For Loop
// ==> We need to check that as we increment the first column towards the last column that we do not 
// exceed the last column.
if (startCol <= endCol) {


for(let row = endRow; row >= startRow; row--){
result.push(array[row][startCol]);
}
startCol++

}

  // 1st For loop
 // get the first row of the array
 for(let col = startCol; col <= endCol; col++){
      result.push(array[startRow][col]);
 }
 // 
 startRow++;
 
 // 2nd For loop
 for(let row = startRow; row <= endRow; row++){
  result.push(array[row][endCol]);
}
endCol--;

// 3rd For Loop
//==> We want to check that after we append the last element in the last row
// and the first column element, we then push that into the array & thus decrement the row.  We
// need to check that as we close the gap between the last row & beginning row that they do not 
//  pass each other.
if (startRow <= endRow) {


for(let col = endCol; col >= startCol; col--){
result.push(array[endRow][col]);
}
endRow--;
}
// 4th For Loop
// ==> We need to check that as we increment the first column towards the last column that we do not 
// exceed the last column.
if (startCol <= endCol) {


for(let row = endRow; row >= startRow; row--){
result.push(array[row][startCol]);
}
startCol++

}

// call the helper function
traversal(array, startRow, endRow, startCol, endCol, result);

}
*/




// Recursive Solution: Correct
function spiralTraverse(array) {
  // Write your code here.

	const result = []
	let [
		startRow, 
		endRow, 
		startCol, 
		endCol
	] = [
		0,
		array.length - 1,
		0,
		array[0].length - 1
	]

	spiralTraversalHelper(array, startRow, endRow, startCol, endCol, result);
	return result;
}

function spiralTraversalHelper(array, startRow, endRow, startCol, endCol, result) {
  // base case:
		if ((startRow > endRow) || (startCol > endCol)) return
		
		for (let col = startCol; col <= endCol; col++) {
			result.push(array[startRow][col])
		}
		startRow++;
		
		for (let row = startRow; row <= endRow; row++) {
			result.push(array[row][endCol]);
		}
		endCol--;
		
		if (startRow <= endRow) {
			for (let col = endCol; col >= startCol; col--) {
				result.push(array[endRow][col]);
			}
			endRow--;
		}
		
		if (startCol <= endCol) {
			for (let row = endRow; row >= startRow; row--) {
				result.push(array[row][startCol]);
			}
			startCol++;
		}
			
	spiralTraversalHelper(array, startRow, endRow, startCol, endCol, result)
}



/* Big O Notation Explainations for Recursive Solution 
Time Complexity:



Space Complexity:


*/

