// Factorialize a Number

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// Decrement for loop
function factorialize(num) {
  let n = 1;
  for (let i = num; i > 0; i--) {
    n *= i;
  }
  return n;
}

// Increment for loop
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

// Decrement while loop
function factorialize(num) {
  let n = 1;
  while (num >= 1) {
    n *= num;
    num--;
  }
  return n;
}

// Recursion
function factorialize(num) {
  // num = 5 * 4 * 3 * 2 * 1
  // 5 * factorialize(5 - 1)
  // 4 * factorialize(4 - 1)
  // ... 1
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));
