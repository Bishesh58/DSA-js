w# Concepts Overview:

# Prompt Analysis and Problem Walkthrough:

- approach:
  First, we wanna init the value that keeps track in the BST and continuely update
  step#1: init closestValue, e.g. = max

step#2: compute TWO 'Absolute Value' Difference:
Goal: compare currentDifference with SmallestDifference
smallest value

- then, compute the 'Absolute Value' (currentDifference) = | closestValue - target|
  e.g.
  | max - 12 | ==> max

- Then, compute the 'Absolute Value' -->SmallestDifference
  --> Absolute Value = |currentValue - target| (another DifferenceB)
  e.g.
  | 10 - 12| = 2 (name it: SmallestDifference )

step#2.1: compare the DifferenceA with DifferenceB:
e.g.
max ??? 2 ==> max > 2

so, 10 is closer number compared with max

==> Decision Makeing: update the ClosestValue or not?
==> Yes, now
closestValue = 10

Round#1:
Goal: we wanna find SmallestDifference betweem closestValue with the target
is 12 > 10 ==> traverse to the right
--> Look at the BST
Decision Makeing: eliminate all the left child nodes
& we will NOT update the ClosestValue = 10

Round#2:
now compare 10 with Right child node
we are looking at currentNum = 15
Goal: we wanna we wanna find SmallestDifference betweem closestValue with the target
DifferenceB: |currentValue - target|
|15 - 12 | = 3
DifferenceA: |closestValue - target|
|10 - 12| = 2

- now compare DifferenceB with DufferenceA?
  which number is Better?
  ===> 2 < 3
  so, 10 is closer than 12 compare with currentValue (15)
  ==> So, should we update our closestValue now?
  ==> No, keep it, ==> closestValue = 10

---

to left
Round#3:

- now we are looking at currentNum = 13
  Goal: we wanna we wanna find SmallestDifference betweem closestValue with the target
  DifferenceB: |currentValue - target|
  |13 - 12 | = 1
  DifferenceA: |closestValue - target|
  |10 - 12| = 2

- now compare DifferenceB with DufferenceA?
  which number is Better?
  ===> 1 < 2
  so, 13 is closer than 12 compare with closesValue (15)
  ==> So, should we update our closestValue now?
  ==> YES, update it, ==> closestValue = 13 (currentValue)

---

Round#4: since it is BST, every left child node is smaller than the right child node.

- now we are looking at currentNum = Null/ leaf of the BST
  Goal: we wanna we wanna find SmallestDifference betweem closestValue with the target
  DifferenceB: |currentValue - target|
  |NULL - 12 | = NULL --END of tree!!
  DifferenceA: |closestValue - target|
  |13 - 12| = 1

- now compare DifferenceB with DufferenceA?
  which number is Better?
  ===> NULL ??? 1 NO Comparison
  so we found our closestValue in this BST, which is '13'

# Layout the problem solving approaches in Steps:

# Alternative Solutions:
