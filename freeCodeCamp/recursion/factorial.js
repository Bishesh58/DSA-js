function recursion(num){
    if(num == 0) 
      return num
    return num + recursion(num - 1)
  }
  console.log(recursion(10))
  
  
  
  
  function findLongWord(word){
    let single = word.split(" ")
   let newArr = []
    let length = 0;
    for(let i = 0; i < single.length; i++){
      newArr.push(single[i].length)
      length = Math.max(... newArr) 
    }
    return length;
  }
  
  console.log(findLongWord("Bishesh is awesome developer"));
  
  
  
  
  function findLongWord(word){
    let single = word.split(" ")
    let length = 0;
    for(let i = 0; i < single.length; i++){
      if( single[i].length >  length ){
        length = single[i].length
      }
    }
    return length;
  }
  console.log(findLongWord("Bishesh is awesome developer"));
  
  
  
  
  function findLongWord(word){
    let single = word.split(" ")
    newArr = []
    for(let i = 0; i < single.length; i++){
      newArr.push(single[i].length)
    }
    newArr.sort()
    return newArr[newArr.length - 1];
  }
  console.log(findLongWord("Bishesh is awesome developer"));