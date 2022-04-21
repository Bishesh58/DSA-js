# AlgoBUS Meeting #16

Date: 02/13/2021 Saturday

Question: Find Three Largest Numbers | Topic: Linear Searching Algorithm | Difficulty: Easy

# PART.A: Prompt Understanding and Analysis

Prompt Understanding"

What info we got from the prompt?
a.] input array not necessary sorted array
b.]output need to be sorted array

# PART.B: Related Concept Overview

# PART.C: Demo: Problem Walkthrough

step#1: init threeLargest = []
[_, _, _]
to store the three largest nums

step#2: loop thru the given input array; compare every element w

# PART.C: Demo: Problem Walkthrough

step#1: init threeLargest = []
[_, _, _]
to store the three largest nums

step#2: loop thru the given input array; compare every element with the three largest nums

step#2.1:
when i =0; array[0] = 141
No? => what we are gonna
update our largestNum
currentNum = 141
// assign the currentNum to be the MAX 1stLargestNum
[null, null, 141]
//
is currentNum >
1stLargest ?
Yes, update
// =>
2nd iteration:
when i= 1, array[1] =1
Do we have a 1stLargestNum?
yes,
compare currentNum with 1stLargetNum
1 > 141 ?
NO!
what's next?
compare currentNum with 2ndLargestNum
quetstion#1: do we have a 2ndLargestNum ?
No!
UPDATE 2ndLargestNum to be the currentNum
[null, 1, 141]

3rd Iteration:
when i= 2, array[2] =17
Do we have a 1stLargestNum?
yes,
compare currentNum with 1stLargetNum
17 > 141?
NO!
what's next?
compare currentNum with 2ndLargestNum
quetstion#1: do we have a 2ndLargestNum ?
YES!
What's next?
COMPARE currenetNum with 2ndLargestNum
17 >1?
YES!
UPDATE 2ndLargestNum to be the currentNum
[null, 1, 141]
in order to reAssign the 2ndLargestNum to be the currentNum
So, 2ndLargestNum =17
since our prevous result status is
[null, 1, 141]
so, we need to shift the prevous 2ndLargestNum to the left and place the 2ndLargestNum to be the currentNum
NOW WE are gonna SHIFT? HOW we are gonna SHIFT? everyone?
1st shift the
3rdLargestNum to the left
2nd, we shft the 2ndLargetNum to the left
3rd, we Reassign the 2ndLargestNum to be the currentNum

null [1, 17, 141]

when i =3, array[3] = -7
question to ask?
Do we have 1stLargestNum?
Yes
compare currentNum with 1stLargestNum

-7 >141?
NO!
q to ask?
Do we have 2ndLargestNum
yes,
compare currentNum with 2ndLargestNum
-7 > 17 ?
No!

q to ask?
Do we have 3rdLargestNum?
yes!
compare currentNum with3rdLargetNUM
-7 > 1?
No!
Do NOT upate, next iteration
[1, 17, 141]

5th iteration:
when i =4, array[4] =-17
q to ask?
do we have the 1stLargestNum?
yes
compare
-17 > 141?
No!
do we have the 2ndLargestNum?
yes
compare
-17 > 17?
No
q to aks?
do we have the 3rdLargestNUm
yes
comparre
-17> 1?
NO!
DO NOT update, next iteration
[1, 17, 141]

6th iteration:
when i = 5, array[5] =-27
q to ask?
do we have 1stLargestNum?
compare
-27 > 141
NO!
q to ask?
Yes

-27 > 17?
No!
do we have 3rdLargestNum?

-27 > 1?
No!
DO NOT update, next iteration

7th iteration:
when i =6, array[6] =18
q to ask ?
do we have the 1stLargestNum?
yes
18 > 141?
NO!
q to ask?
do we have the 2ndLargestNum?
yes
18 > 17
YES!
what should we do next?
Reassign the
2ndLargetNum to be the currentNum
2ndLargestNum = 18
how to replace?
use SHIFT Algorthm!
shift 3rdLargestNum to left
shift 2ndLargestNum to left to be the 3rdLargestNum
Then, UPdate the2ndLargestNum to be the currentNum

situation: UPDATE
1 [17, 18, 141]
next iteration:

8th iteration:
when i=7, array[7] = 541
q to ask?
do we have 1stLargestNum?
Yes
compare currentNum with 1stLargest
541 > 141?
yes
update 1stLargestNum to be the currentNum
shift all the number to the left
shift the 1stLargstNum to the left to be the 2mdLaregetNum
shift 2ndLargetNum to the left to the 3rdLargestNum
shift 3rdLargestNum to the left

update: situation
1 [17, 18, 141]
to be:

17 [ 18, 141, 541]
next iteration:

9th iteration:
when i=8, array[8] =8
q to ask?
Do we have 1stLargestNum?
yes
compare currentNum with 1stLargestNum?
8 > 541
NO!
do we have 2ndLagestNum?
yes
compatr currentNum with 2ndLargestMum?
8 > 141 ?
No!
q to ask
do we have 3rdLargestNum?
yes
compare currentNum with 3rdLargestNum
8 > 18 ?
NO!
DO NOT Update the output array

next iteration:

10th iteration:
when i=9, array[9] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

11th iteration:
when i=10, array[10] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

DONE!
WE found our ouput array
[ 18, 141, 541]

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

Do we have 1stLargestNum?
Yes
compare currentNum with 1stLargestNum

-7 >141?
NO!
q to ask?
Do we have 2ndLargestNum
yes,
compare currentNum with 2ndLargestNum
-7 > 17 ?
No!

q to ask?
Do we have 3rdLargestNum?
yes!
compare currentNum with3rdLargetNUM
-7 > 1?
No!
Do NOT upate, next iteration
[1, 17, 141]

5th iteration:
when i =4, array[4] =-17
q to ask?
do we have the 1stLargestNum?
yes
compare
-17 > 141?
No!
do we have the 2ndLargestNum?
yes
compare
-17 > 17?
No
q to aks?
do we have the 3rdLargestNUm
yes
comparre
-17> 1?
NO!
DO NOT update, next iteration
[1, 17, 141]

6th iteration:
when i = 5, array[5] =-27
q to ask?
do we have 1stLargestNum?
compare
-27 > 141
NO!
q to ask?
Yes

-27 > 17?
No!
do we have 3rdLargestNum?

-27 > 1?
No!
DO NOT update, next iteration

7th iteration:
when i =6, array[6] =18
q to ask ?
do we have the 1stLargestNum?
yes
18 > 141?
NO!
q to ask?
do we have the 2ndLargestNum?
yes
18 > 17
YES!
what should we do next?
Reassign the
2ndLargetNum to be the currentNum
2ndLargestNum = 18
how to replace?
use SHIFT Algorthm!
shift 3rdLargestNum to left
shift 2ndLargestNum to left to be the 3rdLargestNum
Then, UPdate the2ndLargestNum to be the currentNum

situation: UPDATE
1 [17, 18, 141]
next iteration:

8th iteration:
when i=7, array[7] = 541
q to ask?
do we have 1stLargestNum?
Yes
compare currentNum with 1stLargest
541 > 141?
yes
update 1stLargestNum to be the currentNum
shift all the number to the left
shift the 1stLargstNum to the left to be the 2mdLaregetNum
shift 2ndLargetNum to the left to the 3rdLargestNum
shift 3rdLargestNum to the left

update: situation
1 [17, 18, 141]
to be:

17 [ 18, 141, 541]
next iteration:

9th iteration:
when i=8, array[8] =8
q to ask?
Do we have 1stLargestNum?
yes
compare currentNum with 1stLargestNum?
8 > 541
NO!
do we have 2ndLagestNum?
yes
compatr currentNum with 2ndLargestMum?
8 > 141 ?
No!
q to ask
do we have 3rdLargestNum?
yes
compare currentNum with 3rdLargestNum
8 > 18 ?
NO!
DO NOT Update the output array

next iteration:

10th iteration:
when i=9, array[9] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

11th iteration:
when i=10, array[10] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

DONE!
WE found our ouput array
[ 18, 141, 541]

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

Do we have 1stLargestNum?
Yes
compare currentNum with 1stLargestNum

-7 >141?
NO!
q to ask?
Do we have 2ndLargestNum
yes,
compare currentNum with 2ndLargestNum
-7 > 17 ?
No!

q to ask?
Do we have 3rdLargestNum?
yes!
compare currentNum with3rdLargetNUM
-7 > 1?
No!
Do NOT upate, next iteration
[1, 17, 141]

5th iteration:
when i =4, array[4] =-17
q to ask?
do we have the 1stLargestNum?
yes
compare
-17 > 141?
No!
do we have the 2ndLargestNum?
yes
compare
-17 > 17?
No
q to aks?
do we have the 3rdLargestNUm
yes
comparre
-17> 1?
NO!
DO NOT update, next iteration
[1, 17, 141]

6th iteration:
when i = 5, array[5] =-27
q to ask?
do we have 1stLargestNum?
compare
-27 > 141
NO!
q to ask?
Yes

-27 > 17?
No!
do we have 3rdLargestNum?

-27 > 1?
No!
DO NOT update, next iteration

7th iteration:
when i =6, array[6] =18
q to ask ?
do we have the 1stLargestNum?
yes
18 > 141?
NO!
q to ask?
do we have the 2ndLargestNum?
yes
18 > 17
YES!
what should we do next?
Reassign the
2ndLargetNum to be the currentNum
2ndLargestNum = 18
how to replace?
use SHIFT Algorthm!
shift 3rdLargestNum to left
shift 2ndLargestNum to left to be the 3rdLargestNum
Then, UPdate the2ndLargestNum to be the currentNum

situation: UPDATE
1 [17, 18, 141]
next iteration:

8th iteration:
when i=7, array[7] = 541
q to ask?
do we have 1stLargestNum?
Yes
compare currentNum with 1stLargest
541 > 141?
yes
update 1stLargestNum to be the currentNum
shift all the number to the left
shift the 1stLargstNum to the left to be the 2mdLaregetNum
shift 2ndLargetNum to the left to the 3rdLargestNum
shift 3rdLargestNum to the left

update: situation
1 [17, 18, 141]
to be:

17 [ 18, 141, 541]
next iteration:

9th iteration:
when i=8, array[8] =8
q to ask?
Do we have 1stLargestNum?
yes
compare currentNum with 1stLargestNum?
8 > 541
NO!
do we have 2ndLagestNum?
yes
compatr currentNum with 2ndLargestMum?
8 > 141 ?
No!
q to ask
do we have 3rdLargestNum?
yes
compare currentNum with 3rdLargestNum
8 > 18 ?
NO!
DO NOT Update the output array

next iteration:

10th iteration:
when i=9, array[9] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

11th iteration:
when i=10, array[10] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

DONE!
WE found our ouput array
[ 18, 141, 541]

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# Explain the 'const' and 'let' by Devin

const num = array[index]
every time we change index the previous number is gone!

to summarize: only affect how we interact
with it. whetahe we Re-assign it or not.
-7 >141?
NO!
q to ask?
Do we have 2ndLargestNum
yes,
compare currentNum with 2ndLargestNum
-7 > 17 ?
No!

q to ask?
Do we have 3rdLargestNum?
yes!
compare currentNum with3rdLargetNUM
-7 > 1?
No!
Do NOT upate, next iteration
[1, 17, 141]

5th iteration:
when i =4, array[4] =-17
q to ask?
do we have the 1stLargestNum?
yes
compare
-17 > 141?
No!
do we have the 2ndLargestNum?
yes
compare
-17 > 17?
No
q to aks?
do we have the 3rdLargestNUm
yes
comparre
-17> 1?
NO!
DO NOT update, next iteration
[1, 17, 141]

6th iteration:
when i = 5, array[5] =-27
q to ask?
do we have 1stLargestNum?
compare
-27 > 141
NO!
q to ask?
Yes

-27 > 17?
No!
do we have 3rdLargestNum?

-27 > 1?
No!
DO NOT update, next iteration

7th iteration:
when i =6, array[6] =18
q to ask ?
do we have the 1stLargestNum?
yes
18 > 141?
NO!
q to ask?
do we have the 2ndLargestNum?
yes
18 > 17
YES!
what should we do next?
Reassign the
2ndLargetNum to be the currentNum
2ndLargestNum = 18
how to replace?
use SHIFT Algorthm!
shift 3rdLargestNum to left
shift 2ndLargestNum to left to be the 3rdLargestNum
Then, UPdate the2ndLargestNum to be the currentNum

situation: UPDATE
1 [17, 18, 141]
next iteration:

8th iteration:
when i=7, array[7] = 541
q to ask?
do we have 1stLargestNum?
Yes
compare currentNum with 1stLargest
541 > 141?
yes
update 1stLargestNum to be the currentNum
shift all the number to the left
shift the 1stLargstNum to the left to be the 2mdLaregetNum
shift 2ndLargetNum to the left to the 3rdLargestNum
shift 3rdLargestNum to the left

update: situation
1 [17, 18, 141]
to be:

17 [ 18, 141, 541]
next iteration:

9th iteration:
when i=8, array[8] =8
q to ask?
Do we have 1stLargestNum?
yes
compare currentNum with 1stLargestNum?
8 > 541
NO!
do we have 2ndLagestNum?
yes
compatr currentNum with 2ndLargestMum?
8 > 141 ?
No!
q to ask
do we have 3rdLargestNum?
yes
compare currentNum with 3rdLargestNum
8 > 18 ?
NO!
DO NOT Update the output array

next iteration:

10th iteration:
when i=9, array[9] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

11th iteration:
when i=10, array[10] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

DONE!
WE found our ouput array
[ 18, 141, 541]

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# Explain the 'const' and 'let' by Devin

const num = array[index]
every time we change index the previous number is gone!

to summarize: only affect how we interact
with it. whetahe we Re-assign it or not.

// else only check only of the first two conditional check fail
throw it away and replace
-7 >141?
NO!
q to ask?
Do we have 2ndLargestNum
yes,
compare currentNum with 2ndLargestNum
-7 > 17 ?
No!

q to ask?
Do we have 3rdLargestNum?
yes!
compare currentNum with3rdLargetNUM
-7 > 1?
No!
Do NOT upate, next iteration
[1, 17, 141]

5th iteration:
when i =4, array[4] =-17
q to ask?
do we have the 1stLargestNum?
yes
compare
-17 > 141?
No!
do we have the 2ndLargestNum?
yes
compare
-17 > 17?
No
q to aks?
do we have the 3rdLargestNUm
yes
comparre
-17> 1?
NO!
DO NOT update, next iteration
[1, 17, 141]

6th iteration:
when i = 5, array[5] =-27
q to ask?
do we have 1stLargestNum?
compare
-27 > 141
NO!
q to ask?
Yes

-27 > 17?
No!
do we have 3rdLargestNum?

-27 > 1?
No!
DO NOT update, next iteration

7th iteration:
when i =6, array[6] =18
q to ask ?
do we have the 1stLargestNum?
yes
18 > 141?
NO!
q to ask?
do we have the 2ndLargestNum?
yes
18 > 17
YES!
what should we do next?
Reassign the
2ndLargetNum to be the currentNum
2ndLargestNum = 18
how to replace?
use SHIFT Algorthm!
shift 3rdLargestNum to left
shift 2ndLargestNum to left to be the 3rdLargestNum
Then, UPdate the2ndLargestNum to be the currentNum

situation: UPDATE
1 [17, 18, 141]
next iteration:

8th iteration:
when i=7, array[7] = 541
q to ask?
do we have 1stLargestNum?
Yes
compare currentNum with 1stLargest
541 > 141?
yes
update 1stLargestNum to be the currentNum
shift all the number to the left
shift the 1stLargstNum to the left to be the 2mdLaregetNum
shift 2ndLargetNum to the left to the 3rdLargestNum
shift 3rdLargestNum to the left

update: situation
1 [17, 18, 141]
to be:

17 [ 18, 141, 541]
next iteration:

9th iteration:
when i=8, array[8] =8
q to ask?
Do we have 1stLargestNum?
yes
compare currentNum with 1stLargestNum?
8 > 541
NO!
do we have 2ndLagestNum?
yes
compatr currentNum with 2ndLargestMum?
8 > 141 ?
No!
q to ask
do we have 3rdLargestNum?
yes
compare currentNum with 3rdLargestNum
8 > 18 ?
NO!
DO NOT Update the output array

next iteration:

10th iteration:
when i=9, array[9] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

11th iteration:
when i=10, array[10] = 7
q to ask?
do we have 1stLargestNum?
yes
compare currentNum with 1stLargetNum
7 > 541 ?
No!
q to ask?
do we have 2ndLargestNum?
yes
compare currentNum with the 2ndLargestNum?
7 > 141 ?
no
q to ask?
do we have 3rdLargetNum?
yes
compare
7>18 ?
NO
DO NOT update the output array
move to next iteration!

DONE!
WE found our ouput array
[ 18, 141, 541]

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# Explain the 'const' and 'let' by Devin

const num = array[index]
every time we change index the previous number is gone!

to summarize: only affect how we interact
with it. whetahe we Re-assign it or not.

// else only check only of the first two conditional check fail
throw it away and replace
