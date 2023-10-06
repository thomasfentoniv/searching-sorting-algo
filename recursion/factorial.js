/**
 * Computes the factorial of a number using a standard recursive (bottom-up) approach.
 * Can lead to stack overflow errors for large input sizes
 */
function factorialBottomUp(number) {
  if (number <= 1) {
    console.log(`Bottom-Up: Factorial for ${number} is 1`);
    return 1;
  }
  const result = number * factorialBottomUp(number - 1);
  console.log(`Bottom-Up: Factorial for ${number} is ${result}`);
  return result;
}

/**
 * Computes the factorial of a number using a tail-recursive (top-down) approach.
 */
function factorialTopDown(number, total = 1) {
  if (number <= 1) {
    console.log(`Top-Down: Factorial for ${number} is ${total}`);
    return total;
  }
  const newTotal = total * number;
  console.log(
    `Top-Down: Computing factorial for ${
      number - 1
    } with accumulated total: ${newTotal}`
  );
  return factorialTopDown(number - 1, newTotal);
}

/**
 * Most efficient for computing factorials (iterative, not recursive)
 */
function factorialIterative(number) {
  let accumulator = 1;
  for (let i = 1; i <= number; i++) {
    accumulator *= i;
  }
  console.log(`Iterative: Factorial for ${number} is ${accumulator}`);
  return accumulator;
}

console.log("\nResult for Bottom-Up:");
console.log(factorialBottomUp(5));

console.log("\nResult for Top-Down:");
console.log(factorialTopDown(5));

console.log("\nResult for Iterative:");
console.log(factorialIterative(5));
