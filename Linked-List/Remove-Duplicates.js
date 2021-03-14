/* 
Question: You are given the head of a Singly Linked List whose nodes are in sorted order with respect to their values.
Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values.
The Linked List should be modified in place (i.e. you shouldn't create a brand new list), and the modified linked list should still
has its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list.
*/

/* 
Sample Input:
LinkedList = 1->1-> 3-> 4->4->4-> 5-> 6->6 

Sample Output:
1-> 3-> 4-> 5-> 6
*/

//Solution 1: Time O(n): Space O(1)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(head) {
  //hold head value (first pointer) on temp variable and start looping until there are head.next values
  //if first point value is same as the next pointer then move next pointer to next of next
  //else update the first pointer to be the next pointer
  let currentNode = head;
  while (currentNode.next !== null) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
}

// Solution 2 using Set: Time O(n): Space O(n): Works both sorted Linked List and unsorted Linked List

function removeDuplicatesFromLinkedList(head) {
  const seen = new Set();

  let current = head;
  let previous = null;

  while (current) {
    if (seen.has(current.value)) {
      previous.next = current.next;
    } else {
      seen.add(current.value);
      previous = current;
    }
    current = current.next;
  }
  return head;
}

// Solution 3 using hash map: Time O(n): Space O(n)
function removeDuplicatesFromLinkedList(head) {
  const hash = {};
  let cur = head;
  let prev;
  while (cur) {
    if (!hash[cur.value]) {
      hash[cur.value] = true;
      prev = cur;
    } else {
      prev.next = cur.next;
    }
    cur = cur.next;
  }
  return head;
}
