/*
Given a string, determine if it is a palindrome, considering only alphanumeric character
and ignoring case sensitivity.
*/

/* 
Edge case:
 account for old & even length of number
 account for single char & empty string
 ignore case sensitive
 account for long string
*/

/* 
approach: There can be many different approach to this, one could be reverse the string & compare
with original string, if it match return true. The second solution can be looping from the end of the string &
storing them in an array when looping is done join the letters to form a string and compare. The third
solution can be creating two pointers and looping while left point is smaller than right pointer, and if string at index doesn't
match then we return false, outside the loop when done we return true;
*/

//Solution 1: Two pointers o(n), o(n)
function isPalindrome(string) {
  // removing white spaces, special char, symbol, etc
  string = string.replace(/[^A-Za-z0-9]/g, " ").toLowerCase();

  //initializing two pointers at start & end
  let left = 0;
  let right = string.length - 1;

  //loop through string while computing them, then move the pointers
  //closer to the center
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

//Solution 2: reverse String
function isPalindrome(string) {
	//o(n^2), o(n)
  // reverse the string and check each letter if they are same
	//remove spcl char, symbol, white spaces
	string = string.replace(/[^A-Za-z0-9]/g, " ").toLowerCase();
	//initialize a variable with empty string to hold reverse string
	let revString = ""
	//O(N)
	for(let i = string.length -1; i >= 0; i--){
		//This creates O(N) time
		revString += string[i]
	}
	//it returns true or false depending on the condition
 return string === revString
}

//Solution 3: assuming non empty string with no white spaces & char, o(n) T & o(n) S
function isPalindrome(string) {
    let revString = []
      for(let i = string.length -1; i >= 0; i--){
          revString.push(string[i]);
      }
      return string === revString.join('');
      
      //it returns true or false depending on the condition
   return string === revString
}

//Solution 4: recursive o(n) & o(n)
function isPalindrome(string, i= 0){
    const j = string.length -1 -1;
    return i >=j? true: string[i]=== string[j] && isPalindrome(string, i + 1);
}