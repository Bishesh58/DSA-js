/* Find Three Largest Numbers
 Topic: Searching Algorithm -- Linear Search; Difficulty: Easy

 Prompt: 
 Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.

 The function should return "duplicate integers" if necessary; for example, it should return [ 10, 10, 12 ] for an input array of [ 10, 5, 9, 10, 12 ].



 Sample Input:
 array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

 Sample Output:
 [18, 141, 541]

*/

// Solution#1:
function findThreeLargestNumbers(array){
  // step#1: init threeLargest with 3 null values
  const threeLargest = [null, null, null];
  // step#2: loop thru the give input array
  //=> use 'for..of..loop'
  for (const num of array){
    //step#3: 
      // call a helper function
      // step#3: define a helper function: named 'updateLargest"
      // => 
    updateLargest(threeLargest, num); //1st helper function
  }
  return threeLargest;
}


// Create the updateLargest helper Function
//=> the helper Function updateLargest takes in: 2 para. => 1.) threeLargest --the output array  2.) num --> the currentNum
function updateLargest(threeLargest, num){
  // handle the comparison and the updating
  // compare the currentNum to each value in the threeLarget 
  // conditional check: 1st compare the currentNum with 1stLargestNum
  if((threeLargest[2]=== null) || (num > threeLargest[2])){
    // if either is true, we are gonna call another helper function --> named shiftAndUpdate 
    // => this helper function gonna take in 3 para: 1) threeLargest (the outputv array); 2) num (currentNum); 3) the index we start our shift from; if our currentNum > the value[2], the starting index would be 2.
    shiftAndUpdate(threeLargest, num, 2);
  }
  // conditional check: then compare the currentNum with 2ndLargestNum 
  else if ((threeLargest[1] === null) || (num > threeLargest[1])) {
    // call the same helper function, but we will start the shiftanduodate with te middle index number which is i=1
    shiftAndUpdate(threeLargest, num, 1);
  }
  // conditional check: then compare the currentNum with 2ndLargestNum 
  else if ((threeLargest[0] === null) || (num > threeLargest[0])) {
    // call the same helper function, but we will start the shiftanduodate with te middle index number which is i=0
    shiftAndUpdate(threeLargest, num, 0);
  }
}

// 2nd Helper Function:
// define our 3rd Helper Function named shiftAndUpate()
// takes in 3 para. 1) threeLargest --(output array) 2) num --currentNum (from the input array) 3) index (from the output array named threeLargest)
function shiftAndUpdate(threeLargest, num, index){
  for ( let i =0; i<=index ; i++) {
    // if index = 2, [0,1, 2]
    // condtional check: if the value of the [i] is equal to the curent index
    if(i=== index) {
      // assign the array[i] to be the num
      // replace the array[i] with the currentNum
      threeLargest[i] = num;
    }
    else {
      // if not, we are shift three largest values to the left, update/ reassign the current value to be right value--> this is how we shift the num and index
      threeLargest[i] = threeLargest[i+1]
    }
  }
}





/*
1st, create array to return the answer named  
 
 */



/* BIG O Notation
Time Complexity: O(N)
Time(O) = O(N)
So N is the length of the input array,



Space Complexity: 
Space = O (1)
constant space, since we did NOT use any additional memory, the size of the input array.

*/

// Solution#2: Test case 2 failed.
function findThreeLargestNumbers(array) {
  
    let first = array[0];
    let second = array[1];
    let third = array[2];
    //conditional check
    for(let i = 0; i <= array.length; i++){
      let num = array[i]
        if(num > third){
          first = second;
          second = third;
          third = num;
        }
        else if(num >= second){
          
          first = second;
          second = num;
          }
        else if(num >= first){
            first = num;
            }
    }
    return[first, second, third]
}


//Solution#3: Test case 8 failed.
function findThreeLargestNumbers(array) {
  
    let first = null;
    let second = null;
    let third = null;
    //conditional check
    for(let i = 0; i < array.length; i++){
      let num = array[i]
        if(num === null || num > third){
          first = second;
          second = third;
          third = num;
        }
        else if(num === null || num > second){
          first = second;
          second = num;
          }
        else if(num === null || num > first){
            first = num;
            }
    }
    return[first, second, third]
}

// Solution#4 -- Elva --- Failed two test cases
function topThree(array){
  if(array.length == 0 ) return [];
  if(array.length == 1) return array;
  if(array.length == 2) return [Math.min(array), Math.max(array)];
  let n1 = -Infinity, n2, n3;
  for(let i = 0; i < array.length; i++){
    if(array[i] >= n1){
      n3 = n2;
      n2 = n1;
      n1 = array[i];
    } else if (array[i] >= n2){
      if(array[i] >= n2){
        n3 = n2;
        n2 = array[i];
      } else if(array[i] > n3){
        n3 = array[i];
      }
    }
  }
  return [n3,n2,n1];
}


