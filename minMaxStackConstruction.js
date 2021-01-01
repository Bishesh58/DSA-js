/* 
Question: 
Design a stack that supports push, pop, top, and retrieving the minimum & maximum element in constant time.
*/

//solution 1: 

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
  


  //Solution 2:

  class MinMaxStack {
	
	constructor(){
		this.stack = [];
		this.minMax = [];
	}
  peek() {
	return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMax.pop()
    return this.stack.pop();
  }

  push(number) {
    
    let currentMinMax = {
        min: number,
        max: number
    }
    // if statement in JavaScript returns true for any number greater (or less) than zero, and false for 0
    //this mean if minMax has something
    if(this.minMax.length){
        let lastMinMax = this.minMax[this.minMax.length - 1]
        
        currentMinMax.min = currentMinMax.min < lastMinMax.min? currentMinMax.min : lastMinMax.min;
        currentMinMax.max = currentMinMax.max > lastMinMax.max? currentMinMax.max : lastMinMax.max;			
    }

    this.minMax.push(currentMinMax);
    this.stack.push(number);
  }

  getMin() {
	 return	this.minMax[this.minMax.length - 1].min;
  }

  getMax() {
    return this.minMax[this.minMax.length - 1].max;
  }
}

