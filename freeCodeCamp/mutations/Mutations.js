// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let firstValue = arr[1].toLowerCase();
  let secondValue = arr[0].toLowerCase();

  for (let i = 0; i < firstValue.length; i++) {
    if (secondValue.indexOf(firstValue[i]) < 0) return false;
  }

  return true;
}

mutation(['hello', 'hey']);

function mutation(arr) {
  var text1 = arr[0].toLowerCase().split('');
  var text2 = arr[1].toLowerCase().split('');
  var len = arr[0].length,
    i,
    key,
    flag,
    j;

  for (i = 0; i < arr[1].length; i++) {
    key = text2[i];

    for (j = 0; j < len; j++)
      if (key == text1[j]) {
        flag = true;
        break;
      } else {
        flag = false;
      }

    if (flag === false) {
      break;
    }
  }
  return flag;
}

mutation(['hello', 'hey']);
