// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// With forEach loop
function titleCase(str) {
  const results = [];
  const splitedStr = str.split(' ');

  splitedStr.forEach((str) => {
    results.push(
      str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
    );
  });

  return results.join(' ');
}

titleCase("I'm a little tea pot");

// With for loop
function titleCase(str) {
  let newStr = [];
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    newStr.push(arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase());
  }

  return newStr.join(' ');
}
