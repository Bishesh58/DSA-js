# AlgoBUS Meeting #13

# what is the use cases for the Fibnoacci Problems:

a.] stocks, bitcoins measuring tool
b.] flowers, paiting
c.]

# PART.A: Prompt Understanding and Analysis

Fib(0)=0
Fib(1) = 1

Fib(5) =

fib(5) = fib(4) + fib(3) = 5
fib(4) = fib(3) + fib(2) = 3
fib(3) = fib(2) + fib(1) = 2
fib(2) = fib(1) + fib(0) =1
Fib(1) = fib(0)+ fib(1) = 1
Fib(0) = 0

[ Fib(0), Fib(1), Fib(2), Fib(3), Fib(4), Fib(5)]
[ 0, 1, 1, 2, 3, 5]
fibTable = {
fib0: 0,
fib1: 1, ==> 1 + fib(0) =
fib2: 1,
fib3: 0,t
fib4: 3,
fibd5: 5,
}

# PART.B: Related Concept Overview

done

# PART.C: Demo: Problem Walkthrough

Done!

given by the prompt:
the 1st number value = 0;
the 2nd number value= 1;

# PART.D: How to Approach this Question: --> Pseudo Codes and Lay out Steps;

b) Memoization approach:

step#1:
add memoization to our function
store hash table(map) is an obj to map the calculation formula, store you already calculated.

you do Not have to re-compute that again.

step#2:
add our base case(s) for our recursive function
getNthFib(n-1) + getNthFib(n-2)

instead of using the call stack to find the previous fibonacci sequence values, we add them to our hash table, and call the values from our table.

This optimization reduces our time complexity by reducing the number of operations needed to find our nth fibonacci sequence value.

as we go down the fibonacci sequence, we store the values as we calculate them, so when call our fib function again we avoid doing calculations that we've already solved.

a.]use recusrive function
/MORE Knowledge Gap Makeup:

/ ES6 modern syntax to write codes:

const arr = [1, 2, 3]
const obj ={1: 1, 2: 2, 3: 3}
for (value in obj) {
console.log(value)
}

for (value of arr) {
console.log(value)
}

// More Advanced ES6
ES6 Javascript supports default parameters. If we do not pass in parameters, then the function will provide default parameters so that our code doesn't break when not enough inputs are given

// Approach#3: Iterative Solution
what are the STEPS?

step#1:
We declare our variables
two pointers that track the values of n-1 and n-2, a counter, or index, variable to see where we are in the iteration, and a temporary variable that we use to calculate the current fib value of the counter that we're on, this will also act as a way to update our n-1 and n-2 values as we go through our loop.

//step#1.1: init variables
prevOne =
prevTwo

index

currentFib

//step#2:

run a loop until our index is equal to n

// step#3
We calculate our new fib based on our previous pointer values, and save it as our current Fib

We then update our pointers to reflect the new value we created. we assign prevTwo to our n-1 value, then we assign our currentFib value to be our new n-1 value.

// step#4
return our prevOne value which holds the latest version of our fib(n)

//\*\*\*Noten that: Interatively start with beginning; while Recursive start with ending value fib(n) value.

fibOne = (n-1)
fibTwo = (n-2)
currentFib = is the 3rd value

now, we are going to update (n-1) and (n-2) values

So,
fibTwo becomes fibOne value
fibOne becomes currentFib value

Next,
if n= 5, fibOne = 3, fibTwo = 2
count <=5,
const currentFib = 3 + 2 = 5
then reassign fibOne, and fibTwo
now
fibTwo = 3
fibOne = currentFib = 5

Then, increment the counter by 1
now
counter ++ ==> counter = 6, n=5, the loop ends.

then,
return fibOne = currentFib = 5

##############################
question& answer: YES!!! the counter represent the sequence the fib trying to solve.
