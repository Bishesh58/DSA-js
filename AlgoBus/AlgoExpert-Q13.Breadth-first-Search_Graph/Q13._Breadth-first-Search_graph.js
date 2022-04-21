/* Breadth-first Search

Topic: Graph; Difficulty: Intermediate

Prompt:
You're given a 'Node class' that has a 'name' and an 'array of optional children nodes'. When put together, nodes form 'an acyclic tree-like structure'.

Implement the breadthFirstSearch method on the 'Node class', which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right ), stores all of the nodes'names in the input array, and returns it.

If you are unfamiliar with Breadth-first Search, go to Concept Overview

Sample Input: 'an acyclic tree-like structure': ==> Graph [ see Picture on the Right ]

Sample Output: 
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]


*/

// Do NOT edit the class below 
// except for the depthFirstSearch method.
// Feel free to add new properties and methods to the class.
// Given: 
class Node {
  constructor(name) {
    this.name = name; 
    this.children = [ ]; 
  }


  // add Child 
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

    // Recursion Function: named 'depthFirstSearch( )' & given the input    array
    breadthFirstSearch(array) {
    // Write your code here...
    // step#1: init a Queue
    let queue = [this];  // this ==> means our RootNode, we are gonna start out with 'this' RootNode
    // step#2: make sure the queue is NOT empty
    //=> check 
    while (queue.length > 0 ) {
      // keep track of our current value
      let currentNode = queue.shift(); //=> poping off the first element from the array/queue.

      // currentNode is starting out the RootNode
      // round#1: push the value in the currentNode into the final array
      array.push(currentNode.name); // which is 'A' for Round#1

      // step#3: to check if our currentNode has children node or not
      //=> step#3.1: if currentNode has children, then we push the childNode in the queue
      //loop thru the currentNode then get child, push the child into the queue
      // currentNode ==> it is an element
      // how to loop an element in an array
      for ( const child of currentNode.children) {
        // push the child into the queue
        queue.push(child);
      }

    }

    return array;

  }

}

/* Big O Notation Explainations:

Time Complexity:
O (v + e)

Space Complexity:

space is the height of the graph, store the wdith in the queue. ==> how does it grows and shrinks based on the input.

*/

/*
Cheating Answer:
Time Complexity: O (v + e) 
  where 'v' is the number of vertices of the input graph, and 'e' is the number of 'edges' of the input graph

Space Complexity: O (v)
  where 'v' is the numver of vertices of the input graph.

*/