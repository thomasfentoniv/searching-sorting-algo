/**
 * Computes the factorial of a number using a standard recursive (bottom-up) approach.
 * Can lead to stack overflow errors for large input sizes
 */
function factorialBottomUp(number) {
  console.log(`Bottom-Up: Computing factorial for ${number}`);
  if (number <= 1) {
    return 1;
  }
  return number * factorialBottomUp(number - 1);
}

/**
 * Computes the factorial of a number using a tail-recursive (top-down) approach.
 */
function factorialTopDown(number, total = 1) {
  console.log(
    `Top-Down: Computing factorial for ${number} with accumulated total: ${total}`
  );
  if (number <= 1) return total;
  return factorialTopDown(number - 1, total * number);
}

/**
 * Most effiecent for computing factorials (iterative, not recursive)
 */
function factorialIterative(number) {
  let accumulator = 1;
  console.log(`Iterative: Computing factorial for ${number}`);
  for (let i = 1; i <= number; i++) {
    accumulator *= i;
  }
  return accumulator;
}

console.log("\nResult for Bottom-Up:");
console.log(factorialBottomUp(5));

console.log("\nResult for Top-Down:");
console.log(factorialTopDown(5));

console.log("\nResult for Iterative:", factorialIterative(5));
