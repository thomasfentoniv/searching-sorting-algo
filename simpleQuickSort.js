/**
 * Sorts an array of elements using the quick sort algorithm.
 * This implementation of quick sort is good for numbers and strings
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Sample usage with a dataset of strings
const stringElements = [
  "dragon",
  "apple",
  "pineapple",
  "banana",
  "cherry",
  "grapefruit",
];
console.log(quickSort(stringElements));
