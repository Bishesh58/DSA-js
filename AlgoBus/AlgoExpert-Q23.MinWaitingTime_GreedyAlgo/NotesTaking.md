# AlgoBUS Meeting #23

Date: 03/20/2021 Saturday

Question: Minimum Waiting Time
Topic: Greedy Algorithms | Difficulty: Easy

# PART.A: Prompt Understanding and Analysis

Prompt Understanding
each ele is query
(is array)
output: is the min. total waiting time.
[ 3, 2, 1, 2, 6]

What info we got from the prompt?
what is the total waitingTime?
[ 3, 2, 1, 2, 6]
3 -> no wait: 0
2 -> wait for 1st ele
1 -> wait for the first 2 ele

Question to think:
what is 'Greedy Algorithm'?
--> Make 'Greedy Choice' : the Optimized Choice

USE CASES:
1st person: 3 mins to join
2nd person: 2 mins to join
3rd person: 1 min to join
4th person: 2 mins to join
5th person: 6 mins: to join --> devin

Goal: least/ minimum waiting time/duration:
e.g worst case:

case A:
[devin, saddam, jennifer, phai ]
6 mins, 2mins, 1min
0, 6mins, 6mins+2mins

phai's total waiting time:
0 + 6 + 8 = 14mins

case B:
[1mins, 2mins, 6mins]
[jennifer, saddam, devin]
0min, + (0+ 1min) + (0 + 1 +2) + (0 +1 +2+6)
phai's total waiting time:
9 mins.

choice B better choice A

# PART.B: Related Concept Overview

Thought Process:
logic or method:

# PART.C: Demo: Problem Walkthrough

given Input Array
[3, 2, 1, 2, 6]
query#1 = 3
query#2 = 2
query#3 = 1
query#4 = 2
query#5 = 6

Without Greedy Algo:
wt = 0 mins
wt = 3 mins = (0+3)
wt = 0 + 3 + 2 = 5 mins
wt = 0 + 3 + 2 + 1 = 6
wt = 6 + 2 =8

what is total waiting time:
0 + 3 + 5 + 6 + 8 = 22 mins

Question to think?
what would the solution for the minimum waiting time?

[1, 2, 2, 3, 6]
step#1sort the given input array

step#2: total waiting time
wt for qu#1 = 0 mins
wt for qu#2 = (0 + 1) = 1mins
wt for qu#3 = (0 +1 + 2) = 3 mins
wt for qu#4 = (0 +1 + 2+ 2) = 5mins
wt for qu#5 = (0 + 1 + 2+ 2+ 3) = 8mins

what is total waiting time ?
0 + 1+ 3 + 5+ 8 = 17 mins
done! get out expected output

# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:

pseudo code:
step#1: sort the given input array in asc order

step#2: loop thru sorted array

step#3: init accu variable (total)
Demo for STEP#3:
sortedArr= [1, 2, 2, 3, 6]
[marry, peter, jay, red, green]
1min -- 1st person
==> 0 mins
2mins -- 2nd person: ==> 1mins
2mins -- 3rd person:
==> (1 + 2) = 3mins
3mins -- 4th person
==> 5 mins
6mins -- 5h person
==> 8 mins
what we need:
a.] total = 0 => accu variable
b.] start interation
round#1:
0 mins X (5 eles) = 0 mins
2nd query formula:
1 mins X (4eles) = 4 mins

3rd query formula:
d X [number of queries remaining]
2 mins X (3 eles) = 6 mins

4th query formula:
2 mins X (2 eles) = 4 mins

5th query formula:
3 mins X (1 ele) = 3 mins

last implementation formula:
6 mins X (0 ele) = 0 mins
r
step#4: return the total

# PART.E: BIG O Notation Explainations

# PART.F: Alternative Solutions and Approaches

# PART. G: CheatSheet if any
