# AlgoBUS Meeting #19

Date: 03/13/2021 Saturday

Question: Remove Duplicates From Linked List 
Topic: Linked List | Difficulty: Easy

# PART.A: Prompt Understanding and Analysis

Prompt Understanding


What info we got from the prompt?

# PART.B: Related Concept Overview
Thought Process:
logic or method:

init pointers and variables

currentNode = Head
e.g. 1st 1

then, store 
Temp = currentNode.next
e.g. 2nd 1

currentNode.next.next
1st 3

then, store currentNode.next.next
to be: Temp
currentNode.next.next = Temp




# PART.C: Demo: Problem Walkthrough
At the very Beginning: Round#0:

LinkedList = 
1->1-> 3-> 4->4->4-> 5-> 6->6 
remove: 

1, 4, 4, 6


init pointers and variables
Round#1:
currentNode = Head
Qta:
Is the nextNode same value as the currentNode?
Yes!
Decision Making:
remove the currentNode.next

How to remove 'currentNode.next'?
so, we are gonna change the pointer to [check]
the currentNode.next.next

Temp = (2nd 1).next ==> 3

Qta: 
is Temp same as the currentNode?
is '3' same as '1st 1' ?
NO!
Decsion Making:
explaination: //=> set the Temp to be variable named 'nextDistinctNode'
Action!
Change the pointer to (value =3)
Temp

Round#2:
Update the pointers:
currentNode = 3
nextDistinctNode = 1st 4
Qta:
is the nextDistinctNode same as the currentNode?
3 ? 1st 4
No!
update the currentNode pointer


Round#3:
Update the pointers:
currentNode = 1st 4
nextDistinctNode = 2nd 4
Qta:
is the nextDistinctNode same as the currentNode?
1st 4 ? 2nd 4
YES!
Decision Making:
Remove the 2nd 4

cheat method!
[
How to remove 'currentNode.next'?
so, we are gonna change the pointer to [check]
the currentNode.next.next
]

Temp = (2nd 1).next ==> 3

]

Action!
Change the pointer to nextDinctNode

Round#4:
Update the pointers:
currentNode = 1st 4
nextDistinctNode = 3rd 4
Qta:
is the nextDistinctNode same as the currentNode?
1st 4 same as 3rd 4?
YES!
Decision Making:
Remove 3rd 4
HOW to remove?
Action!
Change the pointer to nextDinctNode

Round#5:
Update the pointers:
currentNode = 1st 4
nextDistinctNode = 5
Qta:
is the nextDistinctNode same as the currentNode?
5 ? 1st 4
NO!
Decision Making:
Action!
update the currentNode pointer

Round#6:
Update the pointers:
currentNode = 5
nextDistinctNode = 1st 6
Qta:
is the nextDistinctNode same as the currentNode?
1st 6 ? 5
NO!
Decision Making:

Round#7:
Update the pointers:
currentNode = 1st 6
nextDistinctNode = 2nd 6
Qta:
is the nextDistinctNode same as the currentNode?
1st 6 ? 2nd 6
YES!
Decision Making:
REMOVE 2nd 6 
HOW TO REMOVE?
Action!
Change the pointer to nextDinctNode

Round#8:
Update the pointers:
currentNode = 1st 6
nextDistinctNode = null
Qta:
is the nextDistinctNode same as the currentNode?
null ? 1st 6
NO!
Decision Making:
DO NOT REMOVE!
Action!
update the currentNode pointer

Round#9:
Update the pointers:
currentNode = null
nextDistinctNode = do not exit, exit the loop
Qta:
is the nextDistinctNode same as the currentNode?
null ? do not exit, exit the loop
NO!
Decision Making:
return the List
Action!
DONE! --> Return Sorted Listed List with removing all the duplicates!


# PART.D: How to Approach this Question: --> Pseudo codes and Lay out Steps:
pseudo code:
step#1:
store the head in the variable 

step#1b establish base case

step#2:
iterate the given input linked list until reach tail: when (head value =null)

step#3: compare our current node value to our next node's value. 
step#3.1 if the current value is the same as the next value, we move our next pointer over to the next node
step#3.2 if they are not equal, we want to turn our next value into our current pointer 

step#4 return modified linked list

# PART.E: BIG O Notation Explainations


# PART.F: Alternative Solutions and Approaches

# PART. G: CheatSheet if any

