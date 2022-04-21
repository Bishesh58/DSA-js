# AlgoBUS Meeting #13

# PART.A: Prompt Understanding and Analysis

Input
array = [5, 2, [7, -1], 3, [6,, 4]]

==> (6 + (-15) + 4)) \*2 =-10
===> (6 + (-15) + 4) = -9+4 =-5

Output : 12

####

if no special array
init sum= 0;
1st ele;
sum = 0 + 5 = 5

2nd ele;
sum =5 +2 = 7
##########################
3rd ele;
sum =7+ recursiveSum = x
3rd ele: special array:
HOW TO calucalte "r.s."
init: r.s.= 0;
1st ele:
r.s. = 0 + 7 =7
r.s = 7 + (-1) = 6
productSum = r.s. \* multiplier
init M =1 ==> M+1 ==> 2? (at least 2)
=> 6 \* (2) =12
productSum = 12
update: = > productSum ==> 12
###############
first UPDATE : SUM = 7 +12 =19
4th ele;
sum = sum + 3 =y
SUM =19+ 3 =22

###########################
now SUM = 22
5th ele;
sum = SUM + recursiveSum = result

recursiveSUM
5th ele = [6, [-13,8], 4]
To solve the recursiveSUM?
init r.s = 0;
r.s. = 0+6 = 6
r.s. = "special array" = [-13, 8]
r.s. = 0
r.s. = 0 - 13 = -13
r.s. = -13 + 8 = -5
step#1:check if the ele is "special array" or not? if it is a "special array" --> multipler + 1(increment by 1)
since accumM = 2
now M(2)+ 1 = 3
miss step: calcualte productSum for the "super array"
productSum = (-5)\* 3
==>what is the process of get the '3'?

so now productSUM = -15
NOW: 5th ele [1] =-5
r.s. =6 + (-15) =-9
r.s. =(-9) + 4 = -5
NEXT, calculate productSum for the 5th ele "special array"
what is our productSum?
now check if it is "special array"? ==> yes, M = 2

productSum = r.s \* M =(-5)\*2 = -10
#####################
so, question? what is the ultimately funally Ouput "sum" ?
==> which means: return WHAT?
sum = SUM + productSum(5ele)= 22 - 10 =12!!!!!

---

Analysis:
array =
[ele1, ele2, ele3, ele4, ele5]
ele1 = 5 --> idx=0
ele2 = 2 --> idx=1

---

ele3 = [7,-1] --> idx=2
a.k.a."special array"
for each "special array":
1.] we have recurisive sum (r.s)
2.] we have multiplier (M)

---

## ele4 = 3 --> idx =3

ele5 = [6, [-13, 8], 4]
a.k.a. "special array":
for each "special array":
1.] we have recursive sum (r.s.)
2.] we have multiplier (M)

---

---

Question#2: what is our "Base Case"?

# PART.B: Related Concept Overview

# PART.C: Demo: Problem Walkthrough

# PART.D: How to Approach this Question: --> Pseudo Codes and Lay out Steps;

step#1:
init sum = 0; --> acc variable

need a variable to keep track of the level, when we call our function
named "depth" -->
init depth = 1 (as para.)

step#2:iterate over our input array
for loop? or while loop?
--> for ...loop
[--> while ...loop]
[---> reduce(...)]

step#2.1:inside for...loop, conditional check:
a.] check ele(number) exist in the input array or not?
a.1]if yes, add the ele value to our sum (acc)
if NOt a number,but is it an array,
a.2]update our "depth", pass in our 'updated depth' in our 'recursion function'
then,
we call our 'recursion function".

when the 'recursion funtion' return a value \* returned depth

step#3:
outside the for loop, return sum

Note that:
base case:for loop is our base case. which is the length array

good job

# PART.F: Big O Notation Explainations

# PART.G: Alternative Solutions and Approaches

# Extra Flat array

array.flat(depth)
flat will flatten the arguments of a nested array as many levels deep as the depth paramater you pass in.

/// BONUS: how to check if an ele is a Number or not:

typeof array[i] = 'number'
typeof array[i] = 'object' && array[i].length !== 0

Number.isInteger(array[i])
Array.isArray(array[i])

#demo recursion function:
sum += (depth + 1) \* productSum(array[i], depth + 1)

function productSum(array, depth = 1){

# depth = 1

sum = 5 + 2 \* (productSum([7, -1], depth = 1 + 1) + 3 +
2 \* (productSum([6, 3 \* productSum([-13, 8], depth 2 + 1 )], depth = 1 + 1))
sum = 5 + 2(productSum([7, -1], depth = 1 + 1) {
sum = 0
sum += 7 + -1
return sum = 6
})
}

// Explain reduce:
a.] accumultor
b.] currentValue

- pass in a callback function with
  init the
  acc default value

- interate each ele in the array
