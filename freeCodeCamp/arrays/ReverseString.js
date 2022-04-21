/* 
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

//solution 1: using inbuild reverse method

function reverseString(str) {
  let strArray = str.split("");
  let reverseArray = strArray.reverse();
  //.reverse() method will change the original array (reverse in place)
  //strArray == reverseArray
  str = reverseArray.join("");
  return str;
  //return str.split("").reverse().join("");
}

//solution 2: iterative using for loop
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

//solution 3: recursion
function reverseString(str) {
  //base case
  if (str.length === 1) return str;

  //recursive call
  return reverseString(str.slice(1)) + str[0];
}
