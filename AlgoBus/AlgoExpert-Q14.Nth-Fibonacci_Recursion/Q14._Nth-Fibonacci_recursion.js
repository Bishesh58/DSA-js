/* Nth Fibonacci

Topic: Recursion; Difficulty: Easy

Prompt:
The Fibonacci sequence is defined as follows: the first number of the sequence is '0', the second number is '1', and the nth number is the sum of the "(n-1)th" and "(n-2)th" numbers.

Write a function that takes in an integer 'n' and returns the "nth Fibonacci number".

Important note: "the Fibonacci sequence": is often defined with its first TWO numbers as 'F0 = 0' and "F1=1". For the purpose of this question, the first 'Fibonacci number' is 'F0'; therefore, 'getNthFib(0)' is equal to 'F0', 'getNthFib(2)' is equal to 'F1'...etc....


Sample Input#1: 
n = 2

Sample Output#1: 
1 // => 0, 1

Sample Input#2:
n = 6

Sample Output#2:
5 //=> 0, 1, 1, 2, 3, 5



*/

function getNthFib(n) {
  // Write your code here...
  // step#1: nth value = 2 or 1 ==> return the appropriate Fib value

  // identify base case:
  if (n === 1) return 0;
  if (n === 2) return 1;

  // call the recursion function:
  return getNthFib(n - 1) + getNthFib(n - 2);
}

/* Big O Notation Explainations:

Time Complexity: O(2^n)
every call have TWO more sub-problems until we reach Base Case.



Space Complexity: O(n)
because "n" is represented by the number of the calls on the stack.

linear track, the amount of the space will never exceed the number of 'n', never exceed the height of call stack.

*/

// Approach#2: Memoization Solution:
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

Time Complexity: O(n)
we only calculate ONE time for each sequence. NO repeating calculation for the right side.




Space Complexity: O(n)
=> the obj of our values is the actual space: the number of n is ...the hasTable, remove the them from the stack, 



we still using recursion, 

how do you calculate the space for objects?
the number of key-value pairs.

Fib(n) ==> n space
travel back to our recursion, we store those value no-repeated in our object. 
*/

// Approach #3: Iterative Solution:
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
for Iterative Solutions

Time Complexity: O(n)
O(n) --> linear grows with input
O(1) --> const stays the same no how many/(the range of your input) inputs you have.



Space Complexity: O(1)
the definition of the space complexity: how much space, memory, we use, how much the space is gonna change.

Answer: it is constant.

we just use the same amout of the memory from the start to end of the loop. we did not grow or shrink the memory, so our data does not change no matter what fibnoacci we are solving.


this is also called 'BottomUp" techiuque:
*/


/*
this is also called 'BottomUp" techiuque:
*/


/* ButtomUp technique: Iterative Solution version#2. -> Ray  */
function fibBottomUp( n ) {
  
  const answer = [ 0, 1 ]
  
  for( let i = 2; i <= n; i++ ) {
      answer.push( answer[ i - 2] + answer[ i - 1 ])
  }
  
  return answer.pop()
}

