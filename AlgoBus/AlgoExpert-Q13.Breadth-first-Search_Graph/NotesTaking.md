# AlgoBUS Meeting #12-- Agenda: Q#13

Sample Expected Output:

[ A, B-> C -> D, E-> F-> G-> H, I-> J-> K]

# PART.A: Prompt Understanding and Analysis

# PART.B: Related Concept Overview

# PART.C: Demo: how to Traverse the Graph using 'Breadth-first Search' using (additional) data structure 'Queue'

# PART.D: How to Approach this Question: --> Pseudo Codes and Lay out Steps;

Round#0:
Step#1: start out at RootNode (A)
init a Queue = [ ]
first-In-first-Out Rule

Step#1.1: Add RootNode' name (A) to our Queue
==> so, current Queue = [ A, ]

Moreover, preparation, init/ Declare: a CurrentNode
using: While Loop:
--> While the Queue is NOT empty, -->ACTION: we are going to Pop() a Node from the current Queue (in first-In-first-Out rule )
Demo: so current situation:
a.] Queue = [ ] // empty, since the Queue with a node named 'A', so popped of from, and put/ updated on 'CurrentNode'
b.] Now, updated currentNode: (A)
c.] Once the updated currentNode, we are going to put the currentNode name into our final array
c.] Output Array = [A, ]

############### Round #1: BFS ############################
step#1: Then, according to the updated Round#0 Situation
we are going to add all the children nodes of 'A' to the Queue, note the (order does not really matter)
DEMO: So, NOW current situation:
a.] Queue = [ B, C, D ]

now we see the Queue is NOT empty, --> so we popped the first-in- first out from the current Queue

b.] upadted Queue = [C, D]
b.2] 'B' is popped to be put on the 'currentNode'
So, Now, updated currentNode: (B)
c.] Once the updated currentNode, we are going to put/append/push the currentNode name into our final array
So, --> d.] final Output Array = [A,-> B ]

######################## Round #2: BFS ############################
step#1: Then, according to the updated Round#1 Situation
we are going to add all the 'children nodes of 'B' to the Queue, note the (order does not really matter)
DEMO: So, NOW current situation:
a.] Queue = [ C, D, all children nodes of 'B' ] ==> [ C, D, E, F]
now we see the Queue is NOT empty, --> so we popped the first-in-first out froj the current Queue
b.] upadted Queue = [ D, E, F]
b.2] 'C' is popped to be put on the 'currentNode'
So, Now, updated currentNode: (C)
c.] Once the updated currentNode, we are going to put/append/push the currentNode name into our final array
So, --> d.] final Output Array = [ A, --> B, --> C ]

########################## Round #3: BFS #################################
step#1L Then, according to the updated Round#2 Situation
we are going to add all the 'children nodes of 'C' to the Queue, not the (order does not really matter)
DEMO: So, NOw, there is no children node of 'C'
so, Next, we are just going to check if our Queue is empty or not, --> Queue is NOT empty, --> so we pooped the first-in-first-out rule from the current Queue
a.]so, we popped the first-in-first-out 'D' from our Queue
b.] updated Queue = [E, F]
b.2] 'D' os popped to be put on the 'currentNode'
So, Now, updated currentBode, we are going ro put/append/push the currentNode name into our final array
So, --> d.] final Output Array = [A, --> B, --> C, --> D ]

######################## Round #4: BFS ############################
step#1: Then, according to the updated Round#3 Situation
we are going to add all the 'children nodes of 'D' to the Queue, note the (order does not really matter)
DEMO: So, NOW current situation:
a.] Queue = [ E, F, all children nodes of 'B' ] ==> [ E, F, G, H]
now we see the Queue is NOT empty, --> so we popped the first-in-first out froj the current Queue
b.] upadted Queue = [ F, G, H]
b.2] 'E' is popped to be put on the 'currentNode'
So, Now, updated currentNode: (E)
c.] Once the updated currentNode, we are going to put/append/push the currentNode name into our final array
So, --> d.] final Output Array = [ A, --> B, --> C, --> E ]

############### continue... ########################

# PART.E: Implementing the real code in JavaScript: based on our agreed pseudo codes

- One Navigator
- One Driver

# PART.F: Big O Notation Explainations

# PART.G: Alternative Solutions and Approaches
