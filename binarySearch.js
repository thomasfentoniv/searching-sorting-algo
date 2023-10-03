/**
 * Finds the index of an element in a sorted array using a binary search algorithm.
 * It's more efficient than linear search for large datasets but requires the array to be sorted.
 */
function binaryIndexOf(compare, sortedElements) {
  let lowerIndex = 0;
  let upperIndex = sortedElements.length - 1;

  while (lowerIndex <= upperIndex) {
    const index = Math.floor((upperIndex + lowerIndex) / 2);
    const comparison = compare(sortedElements[index], index, sortedElements);

    if (comparison === 0) {
      return index;
    } else if (comparison > 0) {
      lowerIndex = index + 1;
    } else {
      upperIndex = index - 1;
    }
  }
  return -1;
}

/**
 * Creates a comparator function for a given target number.
 * The function also logs the comparison process, displaying the comparison for each step.
 */
function forNumber(target) {
  return (element, index) => {
    console.log(`compare ${target} to ${element} at index ${index}`);

    if (element === target) return 0;
    return element < target ? 1 : -1;
  };
}

const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];
console.log(binaryIndexOf(forNumber(274), elements));
