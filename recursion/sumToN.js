/**
 * Recursively computes the sum of integers from 1 to n.
 * For-loop is generally more efficient.
 */
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

const result = sum(5);
console.log(`The sum of integers from 1 to 5 is: ${result}`);
