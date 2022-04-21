# AlgoBUS Meeting #15

Date: 02/06/2021 Saturday

Question: Binary Search | Topic: Binary Search | Difficulty: Easy

# PART.A: Prompt Understanding and Analysis

Prompt Understanding:
What is "Binary Search Algorithm ?"
-- watch video demo to understand the concept

What info we got from the prompt?
Given Input:
a.] sorrted array
b.] targetNum
Expected Output:
c.] index number of the target

# PART.B: Related Concept Overview

# PART.C: Demo: Problem Walkthrough

given Input Array

array = [ 0, 1, 21, 33, 45, 45, 61, 71, 72, 73]; target =33

# PART.D: How to Approach this Question: --> Pseudo Codes and Lay out Steps;

How the Binary Search Algorithm will work in our question?
Approach? [High-level]
The Goal:
--> To find the 'middle number' of the array and based on the middle number and how 'the middle number'compares to the 'target number'

--> and you will continue exploring the first half of the array OR the second half of the middle number

--> then we will do the low-level approaches to do the problem walkthrough

Pseudo Codes in steps [ Low-level]
step#1:init our pointers && to calculate the middleNum

leftPointer = 0
rightPointer = array.length -1

---

fomula to calculate the middlePointer = sum(leftPointer + rightPointer)/2

Next:
Round Down the middlePointer

middilePointer =

step#1.a] to calcualte the middileNum =

then,find where is tobe chopped off
Round#1
middlePointer = (0+9) / 2 = 4.5 ==> Round Down ==> 4

step#2: Compare middleNum with targetNum
Round#1: How to Compare?
is middleNum ==? targetNum?
array[middlePointer] = 45
target = 33
is 45 ? 33 ?? // No, 45 > 33 //=> we need a Smaller Number
Step#2.b] Decision Making:

- 1st, eliminate all
  the nums on the right which greater than or equal to 45(middleNum)
- 2nd, we need to move our Pointer?
  ==> How?
  move rightPointer to left
  (rightPointer to the left)
  so the rightPointer need to samller than middlePointer by 1
  (middlePointer -1)

  -- Reassign \*\*\*
  our rightPointer to be
  :
  middlePointer -1

// 0 1 2 3
// [0 ,1, 21, 33]
// L \***\*\*\*\*\***R

- so, right now:After 1st Chop
  currentSituation:
  leftPointer =0
  rightPointer=3

Round#2:
currentSituation:
leftPointer =0
rightPointer=3
Round#2 --STEP#1: re-position pointers && to re-calculate the middleNum

how to calculate middlePointer
middlePointer = sum(leftPointer + rightPointer)/2

= (0+3)/ 2 =1.5

Round Down ==> 1
current MiddlePointer = 1

Round#2 --STEP#2: now we got our middlePoiner && middleNum
So, we are going to compare middleNum with targetNum

Round#2.a] Question?
is middleNum == ? == targetNum
middleNum = array [middlePointer]
= array[1] = 1
1 ? == 33 ? // => No, 1
< 33 // we need a Bigger Number
So, we need to move our Pointers
How?
--> move leftPointer to right
(leftPointer )
move our leftPointer to the
right side of the middlePointer by 1
: Reassign the position of the leftPointer
leftPointer = middlePointer +1

Update current Situation:
middlePointer =1
leftPointer =2
rightPointer = 3

--> 2nd Chop
Desicion Making:

- 1st, Eliminate all the nums on the left side of the middleNum
  -2nd, Move leftPointer to right side of the middlePointer by 1

Round#3:After 2nd-time Chop
current situation:
leftPointer = 2
rightPointer =3
Round#3--STEP#1: To re-caculate the middlePointer
middlePointer = sum(leftPointer + rightPointer)/2

= (2+3)/2 =5/2 = 2.5
Round Down = 2

Round#3--STEP#2:now got our middlePoiner && middleNum
Round#3.a]
Question?
is middleNum ==? targetNum?
21 ? == 33 //No ==> 21 < 33 // we need Bigger Number
Decision Making:
-1st, Eliminate all the numbers on the left side of tge middleNum

-2nd, move leftPointer to the right side of the middlePointer by 1
Reassign the leftPointer
leftPointer = middlePointer +1

Round#4:After 3rd-time Chop
current situation:
leftPointer = 3
rightPointer =3

Round#4--STEP#1: To re-caculate the middlePointer
middlePointer = sum(leftPointer + rightPointer)/2
middlePointer = (3+3)/2 = 3
NO Round Down
Round#4--STEP#2:now we got our middlePointer && middleNum
so, we are going to compare
middleNum with targetNum
Qeustion?
33 ?==? 33 // Yes ==> found the taregetNum

return index of the targetNum

End of Binary Search

# PART.E: Big O Notation Explainations

# PART.F: Alternative Solutions and Approaches
