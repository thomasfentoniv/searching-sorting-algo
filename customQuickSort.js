/**
 * Sorts an array of elements using the quick sort algorithm.
 * By using a comparator, this quick sort implementation is flexible with different data types
 */
function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex);
    quickSort(compare, elements, lowerIndex, index - 1);
    quickSort(compare, elements, index + 1, upperIndex);
  }
  return elements;
}

/**
 * Elements less than the pivot go before the pivot and elements greater than the pivot go after it.
 * Returns the index of the pivot after partitioning.
 */
function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]);

    if (comparison > 0) {
      if (partitionIndex !== index) {
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++;
    }
  }

  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

// Sample dataset
const people = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 29 },
  { name: "Diana", age: 42 },
  { name: "Eve", age: 19 },
];

// Comparator function to compare ages of two people
const ageComparator = (personA, personB) => personA.age - personB.age;

console.log(quickSort(ageComparator, people));
