/* Topic: Stack; Difficulty: Intermediate
Prompt:  Min Max Stack Construction: 
Write a MinMaxStack class for a Min Max Stack. The class should support:
  - Pushing and Popping values on and off the Stack

  - Peeking at the value at the Top of the Stack

  - Getting Both the Minimum and Maximum values in the Stack at any given point in time.

All class methods, when considered independently, should run in "constant time" and with "
constant space".


*/

/* Sample Usage:
// All operations below are performed sequentially.
MinMaxStack(): - // Instantiate a MinMaxStack
push(5): -
getMin(): 5
getMax(): 5
peek(): 5
push(7): -
getMin(): 5
getMax(): 7
peek(): 7
push(2): -
getMin(): 2
getMax(): 7
peek(): 2
pop(): 2
pop(): 7
getMin(): 5
getMax(): 5
peek(): 5

*/

// Feel free to add new properties and methods to the class.
class MinMaxStack {
  //step#1: init a constrcutor
   constructor () {
     this.stack = [];
     this.minMax = [];
   }
  


  peek() {
    // Write your code here.
    //=> return the value at the Top of stack
    return this.stack[this.stack.length -1];
    
  }
  pop() {
    // Write your code here.
    this.minMax.pop();
    return this.stack.pop();
  }

  push(number) {
    // Write your code here.
    //calculate whether we have new minVal or new maxVal
    //create a new object named newMinMax
    const newMinMax = {
      min: number,
      max: number
    }
    //check if we have previous min max value to compare
    if(this.minMax.length) {
      //if we have current length
      //=> compare new minMax with last minMax value
      let lastMinMax = this.minMax[this.minMax.length-1] 

      // reassign newMinMax to the smallest min
      newMinMax.min = newMinMax.min < lastMinMax.min ? newMinMax.min : lastMinMax.min;

      // reassign newMinMax to the largest max
      newMinMax.max = newMinMax.max > lastMinMax.max ? newMinMax.max : lastMinMax.max;
    }

    // make sure we push the right value updated minVal & maxVal
    this.minMax.push(newMinMax);
    this.stack.push(number);

  }

  getMin() {
    // Write your code here.
    return this.minMax[this.minMax.length - 1].min
  }

  getMax() {
    // Write your code here.
    return this.minMax[this.minMax.length - 1].max
  }
}

/* Big O Notation Explainations:
run constant time and constant space

Time Complexity: 
O(1) Each action, whether pushing values, popping values, or finding the min and max values, is performed in constant time because for all of our interactions are performed at the end of our array, which we are using as the storage method of our stack. All interactions with the last element of the array are performed in constant time because we do not need to loop through the array to access those values.


Space Complexity:
O(n) to keep our time complexity at constant time, in this solution we have a separate minMax array that stores the latest min and max variables for each push, and removes those variables with each pop. Because our minMax array grows in linear proportion to the size of our stack array, our space complexity is O(n)


*/

/* Solution#2:  */
class MinMaxStack{

  constructor(){
    this.stack = [];
    this.minmax = [];
    // this is a pointer which points to last value
    top = -1 // which means empty array
 }
 
  peek(){
    return stack[top];
 }
 
  pop(){
    var popvalue = stack[top];
    top--;	
    return popvalue;
 }
 
 push(data){
    top++;
    this.stack[top] = data;
 }
 
 }
 

 /* Solution#3: */
 // Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = [];
    this.max = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.min.pop();
    this.max.pop();
    return this.stack.pop();
  }

  push(number) {
		 this.stack.push(number);
		//initial min, max stack
    if (this.min.length === 0 || this.max.length === 0) {
      this.min.push(number);
      this.max.push(number);
			return;
    }
		
		//min stack
    if (this.min[this.min.length - 1] > number) {
      this.min.push(number);
    } else {
      let lastNum = this.min[this.min.length - 1];
      this.min.push(lastNum);
    }
		
		//max stack
    if (this.max[this.max.length - 1] > number) {
      let lastNum = this.max[this.max.length - 1];
      this.max.push(lastNum);
    } else {
      this.max.push(number);
    }

   
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}



 