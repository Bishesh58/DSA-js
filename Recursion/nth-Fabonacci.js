/* 
 Question: The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second
 number is 1, and the nth number is the sum of the (n - 1) & (n - 2)th number.
 Write a function that takes in an integer n and returns the nth Fibonacci number.

 Important note: the Fibonacci sequence is often defined with its first tow numbers as F0 = 0
 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; therefore, 
 getNthFib(0) is equal to F0,
 getNthFib(1) is equal to F , etc..
*/

// Soution 1: Recursively
function getNthFib(n) {
// basecase is 0 & 1. 0 can be achieved when n is equal to 1 & when n is 2 we get 1 using formula
    if(n === 1) return 0;
    if(n === 2) return 1;
    
    //call recursion fun
   return getNthFib(n - 1) + getNthFib(n - 2);
}

/* Big O Notation Explainations:

Time Complexity: O(2^n)
every call have TWO more sub-problems until we reach Base Case.

Space Complexity: O(n)
because "n" is represented by the number of the calls on the stack.
linear track, the amount of the space will never exceed the number of 'n', never exceed the height of call stack.
*/

//Soution 2: Memoization
function getNthFib(n, obj = { 1: 0, 2: 1 }) {
    // step#1: add memoization to our function
    //==> by adding the 2nd para. to our function.
    // Check if our n value is already in our hash table (using ES6 syntax)
    // obj.hasOwnProperty(n) if obj[n]
    if (n in obj) {
      return obj[n]; //=> return the value if it(val) exists.
    } else {
      // if we do not find the value, we call the recursion function.
      obj[n] = getNthFib(n - 1, obj) + getNthFib(n - 2, obj);
      return obj[n];
    }
}

/* Big O Notation Explainations:

Time Complexity: O(2^n)
every call have TWO more sub-problems until we reach Base Case.

Space Complexity: O(n)
because "n" is represented by the number of the calls on the stack.

linear track, the amount of the space will never exceed the number of 'n', never exceed the height of call stack.
*/

//Solution 3: iterative
function getNthFib(n) {
    // Write your code here...
    //step#1: init variables, prevOne is the 1st fibVal, prevTwo is the 2nd fibVal
    let fibOne = 1, fibTwo = 0, counter = 3;
    // we start with 1st number, that is why counter is start at 3.
    if (n === 1) return fibTwo; // => value 0
    if (n === 2) return fibOne; // => value 1
    
    while (counter <= n) {
      const currentFib = fibOne + fibTwo;
      fibTwo = fibOne;
      fibOne = currentFib;
      counter++;
    }
    return fibOne;
}

 /*
 	let [F0, F1, counter, nextFib] = [0,1,3,];
	if (n === 2) return F1;
	if (n === 1) return F0;
	while (counter <= n) {
		nextFib = F0 + F1;
		[F0, F1] = [F1, nextFib]
		counter++;
	}
	return nextFib;
}
 */


/* Big O Notation Explainations:
Time Complexity: O(n)
O(n) --> linear grows with input
O(1) --> const stays the same no how many/(the range of your input) inputs you have.

Space Complexity: O(1)
we just use the same amout of the memory from the start to end of the loop. we did not grow or shrink the memory, so our data does not change no matter what fibnoacci we are solving.
*/

/* ButtomUp technique: Iterative Solution */
function fibBottomUp( n ) {
  
    const answer = [ 0, 1 ]
    
    for( let i = 2; i <= n; i++ ) {
        answer.push( answer[ i - 2] + answer[ i - 1 ])
    }
    return answer.pop()
}


