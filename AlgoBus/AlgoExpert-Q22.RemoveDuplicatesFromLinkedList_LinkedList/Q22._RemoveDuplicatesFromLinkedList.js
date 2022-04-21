/* Remove Duplicates From Linked List
 Topic: Linked List; Difficulty: Easy

 Prompt: 
 You are given the 'Head' of a 'Single Linked List' whose nodes are in 'sorted order' with respect to their values.
 Write a function that returns a 'modified version' of the 'Linked List' that does not contain any nodes with 'duplicate values'.
 The Linked List should be modified in place(i.e. you should NOT create a brand new List), and the modified Linked List still have its  nodes sorted with respect to their values.

 Each 'LinkedList' node has an integer 'value' as well as a 'next' node pointing to the next node in the list OR to 'None/null' if it's the 'Tail' of the list.


 
 Sample Input:
 // the 'head node' with value of '1'
 LinkedList = 1->1-> 3-> 4->4->4-> 5-> 6->6 


 Sample Output:
 // the 'head node' with value of '1'
 1-> 3-> 4-> 5-> 6

*/



// Solution#1:
// Given Input LinkedList
class LinkedList {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(head){
  // Write your code here.
  // step#1: init variables
  // Given By the question: You are given the 'Head' of a 'Single Linked List' --> explain: line#39 when it is currentNode = linkedList
  let currentNode = head;// means the 'head' of the head
  // step#2: use while loop && set base case
  // comments: you can also remove (currentNode !== null) also works!
  while((currentNode !== null) && (currentNode.next !== null)) {
    // step#2.1: if condition: check 
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next
    } 
    else {
      currentNode = currentNode.next
    }
  }
  return head // => return linkedList if the input variable is 'linkedList'
  //
}

/* Big O Notation Explainations
Time Complexity:  
Time = O(n)
line#39: O(1)
line#42: while loop: (linear time) O(n)--> from head until tail O(1) entire node --> O(1) but can be ignored

check itself is constant!

Time Complexity depends on the length of the linkedList

since we iterate the entire linkedList --> Ashwin Explaination


Space Complexity:
Space = O (1)

the space we use does not depend on the length of the linkedList.

we did not use extra space, we just pointing to next node.

it is constant, no changes


*/

// Solution#2: by RayS --> works both sorted Linked List and unsorted Linked List
function removeDups( head ) {
    
  if ( !this.head ) {
    console.log( "No duplicates found since this Linked List was empty." );
    return;
    
  } else if ( !this.head.next ) {
    console.log( "No duplicates found since this Linked List only had a single element." );
    return;
  }

  let leftPointer;
  let nextPointer;
  const nodes = {}; // hash map 

  leftPointer = this.head;
  nextPointer = leftPointer.next;
  nodes[ leftPointer.data ] = true;

  while ( nextPointer ) {
      let data = nextPointer.data;
      if ( nodes[ data ] ) {
          leftPointer.next = nextPointer.next;
      } else {
          nodes[ data ] = true;
          leftPointer = nextPointer;
      }
      nextPointer = nextPointer.next;
    }
  return head;
};

/* Big O Notation Explainations
Time Complexity:  
Time = O(n)
line#39: O(1)
line#42: while loop: (linear time) O(n)--> from head until tail O(1) entire node --> O(1) but can be ignored

check itself is constant!

Time Complexity depends on the length of the linkedList

since we iterate the entire linkedList --> Ashwin Explaination


Space Complexity:
Space = O(n)

use extra space[hash map] to store key-value pairs, to track the key-value pairs if the nodes are duplicated or not. work for the unsorted Linked List.

*/


// Solution#3: by RayS --> works both sorted Linked List and unsorted Linked List--Using the Set method
function removeDups( head ) {
  const seen = new Set();
  
  let current = head;
  let previous = null;
  
  while ( current ) {
    if ( seen.has( current.value )) {
      previous.next = current.next;
    } else {
      seen.add( current.value );
      previous = current;
    }
    
    current = current.next;
    
  }
  return head;
}

// Solution#4: by Phani using Two Pointers --by Phani--> half way corrent!
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(head) {
  // Write your code here.
 	temp1 = head;
	temp2 = head.next;

while(temp2 != null){
  if(temp1.value === temp2.value){
    temp2 = temp2.next;
  }
  else{
    temp1.next = temp2;
    temp2 = temp2.next;	
  }

	
}
	return head;
}