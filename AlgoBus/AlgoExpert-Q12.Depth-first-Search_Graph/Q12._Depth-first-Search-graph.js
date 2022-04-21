/* Depth-first Search

Topic: Graph; Difficulty: Easy

Prompt:
You're given a Node class that has a name and an array of optional children nodes.When put together, nodes form an acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right ), stores all of the nodes'names in the input array, and returns it.

If you are unfamiliar with Depth-first Search, go to Concept Overview

Sample Input: 'an acyclic tree-like structure': ==> Graph [ see Picture on the Right ]
what is the given array represent:
an obj of array

"graph": {
  "nodes": [
    {"children": ["B", "C", "D"], "id": "A", "value": "A", addChild(name), depthFirstSearch(array)},
    {"children": ["E", "F"], "id": "B", "value": "B", addChild(name), depthFirstSearch(array)},
  ],
  "startNode": "A"
}


Sample Output: 
['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']


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
  depthFirstSearch(array) {
  // Write your code here...
     // array represented a constructed array --> each array contains an obj, --> each obj: 
  //step#1: we are given an empty array
  // step#2: push our name value of each node into the given input array
  
  // for (let i = 0; i < array.length; i++) {return array[i]}
  // for(let node of children) {return node}
  array.push(this.name);

  // step#3: each node only knows itself and its children, go through entire list 
  //==> loop thru the children array
  //?? what is  'for ...of..loop'?
  // ?? for ... in loop, loop keys and values
  //?? for ...of..loop? ==>  interate array using 
  for (let node of this.children) {
    // call the recursive function named depthFirstSearch 
    node.depthFirstSearch(array);
  }

  return array;



}


}

/* Big O Notation Explainations:

Time Complexity: O (v + e)
where 'v' is the number of vertices of the input graph, and 'e' is the number of 'edges' of the input graph

worst case, we have to no matter what we have to map over each vertice
the number of children has each child connected by 'edge', the length of the array  is the each node has 


Space Complexity: O (v)
since worst case, basically straight line, like linked list 

the amount of space we use is equal to the amount of nodes in our graph.
event stacks: 



*/

/*
Cheating Answer:
Time Complexity: O (v + e) 
  

Space Complexity: O (v)
  where 'v' is the number of vertices of the input graph.

*/