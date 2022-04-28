// Put string into array seperate by space
// Compare them with length
// Print the result in number

// Check if the index is great than the previous one.
function findLongestWordLength(str) {
  let single = str.split(' ');
  let length = 0;
  for (let i = 0; i < single.length; i++) {
    if (single[i].length > length) {
      length = single[i].length;
    }
  }
  return length;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

// Use sort method
function findLongestWordLength(str) {
  const stringArray = str.split(' ');

  const newArray = [];
  for (let i = 0; i <= stringArray.length - 1; i++) {
    newArray.push(stringArray[i].length);
  }

  newArray.sort();
  return newArray[newArray.length - 1];
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

// Use Math.max to print the longest number
function findLongWord(word) {
  let single = word.split(' ');
  let newArr = [];
  let length = 0;
  for (let i = 0; i < single.length; i++) {
    newArr.push(single[i].length);
    length = Math.max(...newArr);
  }
  return length;
}

console.log(findLongWord('Bishesh is awesome developer'));
