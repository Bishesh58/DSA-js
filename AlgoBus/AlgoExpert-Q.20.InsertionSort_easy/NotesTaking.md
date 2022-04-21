# AlgoBUS Meeting #17

Date: 02/27/2021 Saturday

Question: Insertion Sort | Topic: Sorting Algorithm | Difficulty: Easy

# PART.A: Prompt Understanding and Analysis

Prompt Understanding"

What info we got from the prompt?

# PART.B: Related Concept Overview

a.] To explain the Logic of InsertionSort

MAIN STEPS:
STEP#1: By basically creating a 'Space' at the beginnig of the array/List (that is gonna be a a.k.a. "tentatively Sorted List")

STEP#2: Iterate through the 'Rest of the array'
and each number in the 'Rest of the array', we are gonna 'Insert' that number in the 'tentatively Sorted List'

# PART.C: Demo: Problem Walkthrough

Round#1:
1st, init space to store final result
start to iterate the rest of the array
Round#1:
currentNum = array[1]= 5
this is the number to be Insert into the 'GreenList'
step#2: compare the currentNum with prevNum
currentNum= 5
prevNum = 8
Question to Ask?
is currentNum < prevNum?
Decison Making: Swap
step#3: Updated Situation
[5, 8, '2, 9, 5, 6, 3']

Round#2:
array = [5, 8, '2, 9, 5, 6, 3']
step#1: Find the currentNum to insert
currentNum = 2
prevNum = 8
Q to Ask?
is currentNum < prevNum?
2 < 8
yes, swap the position
updated situation
[5, 2, 8 , '9, 5, 6, 3']

Round#2.1]
currentNum= 2
preNum = 5
2 < 5 ?
yes, swap
updated situation
[2, 5, 8, '9, 5, 6, 3']

---

Round#3:
step#1: find the currentNum
currentNum = 9
insertion status:
[2, 5, 8, 9, '5, 6, 3']
compare currentNUM with PrevNum
currentNum = 9
prevNum = 8
9 < 8 ?
No , keep
updated situation
[2, 5, 8, 9, '5, 6, 3']

---

Round#4:
step#1: find the currentNum
[2, 5, 8, 9, 5, '6, 3']
currentNum= 5
prevNUm = 9
5 < 9 ?
Yes, swap
after swap
Round#4.1: after swap
[2, 5, 8, 5, 9, '6, 3']
a.] currentNum = 5
prevNum = 8
compare
5 < 8 ?
Yes, swap

after swap
Round#4.2: after swap
[2, 5, 5, 8, 9, '6, 3']
currentNum =5
prevNum =5
compare
currentNum < prevNum?
No, keep, do not swap

updated situation
[2, 5, 5, 8, 9, '6, 3']

---

Round#5:
[2, 5, 5, 8, 9, '6, 3']
step#1: find the currentNUM
[2, 5, 5, 8, 9, 6, '3']
currentNum = 6
prevNum= 9
compare currentNum with prevNum
6 < 9?
Yes, swap

after swap
[2, 5, 5, 8, 6, 9, '3']

Round#5.1:
currentNum = 6
prevNum =8
compare
6 < 8?
Yes, swap

after swap
[2, 5, 5, 6, 8, 9, '3']

Round#5.2:
currentNum = 6
prevNum =5
compare
6 < 5 ?
NO, keep -> stop the iteration

Round#6:
[2, 5, 5, 6, 8, 9, '3']
step#1: find the currentNum
currentNum =3
prevNum = 9
compare
3 < 9 ?
yes, swap

after swap:
[2, 5, 5, 6, 8, 3, 9]
Round#6.1:
currentNum = 3
prevNum = 8
compare
3 < 8
yes, swap

after swap:
Round#6.2
[2, 5, 5, 6, 3, 8 , 9]

Round#6.3
currentNum =3
preNum= 6
3 < 6 ?
yes, swap

after swap
[2, 5, 5, 3, 6, 8 , 9]

currentNum = 3
prevNum =5
3 < 5
yes, swap
[2, 5, 3, 5, 6, 8, 9]
....

Round#6.5
[2, 3, 5, 5, 6, 8, 9]
currentNum = 3
prevNum =2
compare
3 < 2?
No, keep it --> Exit Loop

Refer: the AlgoGraph picture

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# PART. G: CheatSheet from last week session:

The different ways to write 'swap' function
Let's become 'Swap' Pro !!!!
a.] regular traditional way:
//helper function:
function swap(i, j, array){ // array[i] = 1, array[j] = 2
// save/store the value in variable to be future use/reference;
const temp = array[i];
array[i] = array[j];
//
array[j] = temp;//which is array[i]
}

b.] Devin's Modern Simplified 'swap' way:
function swap(i, j, array) {
// right side only cares about the left side; left side only cares about the right side.
[array[i], array[j]] = [array[j], array[i]];
}
