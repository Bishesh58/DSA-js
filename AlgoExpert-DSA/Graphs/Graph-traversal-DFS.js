/*
 Question: You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
 Implement the DFS method on the Node class, which takes in an empty array, traverses the tree using the Depth-First-Search approach (specifically navigationg the tree from left to right), stores all of the nodes' name in the input array, and returns it.
*/

//Solution 1: Recursive: Time =>O(n) or to be percise O(vertex + edges) & Space=> O(n)
class Node {
    constructor(name) {
      this.name = name; 
      this.children = [];
    }
      //This will create a new node with given arg(name) & appends it to
      //Node children's property (which is an [])
    addChild(name) {
      this.children.push(new Node(name)); //creating new object which is Node
      return this;
    }
  
    depthFirstSearch(array) {
      //start with pushing name(node) to an array
          array.push( this.name );
          //call recursive function on children array
          for( const child of this.children){
              child.depthFirstSearch(array)
          }
        return array;
    }
}


//Solution 2: Iterative:

class Node {
    constructor(name) {
      this.name = name;  //name = nodes
      this.children = []; //act as a adjacent vertices
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
  
          //initialize queue array 
          const stack = [this]
          
          while(stack.length > 0){
              
              //get the last item that been push to stack
            const current = stack.pop();
              
              //add that item into our final array
              array.push(current.name)
              
              /*If i push children nodes in stack will be the last one to push into 
              final array which is "D" after "A", as "D" will be the
              last one to push into stack so I need to reverse the children array that way
              I push D, C, B and get the B to push into final array.
              */
              let children = current.children
              children.reverse();
             
              for(const child of children){
                  //push it's child to stack
                  stack.push(child);
              }
          }
        return array;
    }
  }
  