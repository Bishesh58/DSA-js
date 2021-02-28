/*
 Question: Write a function that takes in an array of integers and return a sorted version of the array.
 User the Insertion Sort algorithm to sort the array.

 Sample Input: [8, 5, 2, 9, 5, 6, 3]
 Output: [2, 3, 5, 6, 8, 9]
*/

//Solution 1: O(n^2) & O(n)
/*
	[8,5, 2, 9, 5, 6, 3]
	[8      | 5, 2, 9, 5, 6, 3]
	[sorted | unsorted        ]
	let's say first el in an array is sorted & rest is unsorted
	loop through unsorted array starting from second el in an array;
	*/
    function insertionSort(array) {
	for(let i = 1; i < array.length; i++){
		//Now pick one unsorted el at a time i.e 5 in first iteration
		 let temp = array[i];
		//loop through sorted array; initial value must be i - 1 because j must be initialize with index just before i which is array[0]
		let j;
		for(j = i - 1 ; j >=0 && array[j] > temp; j-- ){
			//move temp value one index right of the initial sorted value
			 array[j + 1] = array[j]
			}
		//insert the values to the left most;
		array[j + 1] = temp
	}
	return array;
}

//Solution 2: 
function insertionSort(array) {
	
	for(let i = 1; i < array.length; i++){
		//Now pick one unsorted el at a time i.e 5 in first iteration
		 let temp = array[i];
		
		//loop through sorted array; initial value must be i - 1 because j must be initialize with index just before i which is array[0] in first iteration
		let j = i - 1;
		while(j >=0 && array[j] > temp){
			//move temp value one index right of the initial sorted value
			 array[j + 1] = array[j]
			 j-- ;
			}
		//insert the values to the left most;
		array[j + 1] = temp
	}
	return array;
}


//Solution 3: using Helper function
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

//Solution 4: by Ray
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