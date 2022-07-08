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
  //if(str == "") return str (extra few lines)

  //recursive call
  return reverseString(str.slice(1)) + str[0];

  //if str = "hello"
  //last call stack when str.length 1, "o" ==> str[0] == o,
  //second last call stack str "ol"==> str[0] == l,
  //third last call stack  str "llo" ==> str[0] == l,
  //fourth last call stack str "ello" ==> str[0] == e,
  //top most on call stack str "hello" ==> str[0] == h,
  //return value str[0] added total recursively ==> hello
}
