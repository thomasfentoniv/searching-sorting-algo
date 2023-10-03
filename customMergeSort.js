/**
 * Sorts an array of elements using the merge sort algorithm.
 * By using a comparator, this merge sort implementation can handle other data types beyond numbers.
 */
function mergeSort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }
    const middle = Math.floor(elements.length / 2);
    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);

    const leftElementsSorted = mergeSort(compare, leftElements);
    const rightElementsSorted = mergeSort(compare, rightElements);

    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

/**
 * Helper function for the mergeSort.
 * Merges two sorted arrays into one by comparing elements using the provided comparator.
 */
function merge(compare, left, right) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const comparison = compare(left[leftIndex], right[rightIndex]);

    if (comparison <= 0) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sorted.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  );
}

// Sample usage with a dataset of sorted strings
const stringElements = ["zebra", "apple", "mango", "banana", "cherry"];
const stringComparator = (a, b) => a.localeCompare(b);
console.log(mergeSort(stringComparator, stringElements));
