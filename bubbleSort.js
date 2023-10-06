/**
 * Sorts an array using the bubble sort algorithm.
 * Poor time complexity, but space efficient
 */
function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;
    do {
      inOrder = true;
      for (let i = 0; i < elements.length - 1; i++) {
        const leftElement = elements[i];
        const rightElement = elements[i + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[i] = rightElement;
          elements[i + 1] = leftElement;
          inOrder = false;
        }
      }
    } while (inOrder === false);
  }
  return elements;
}

const numbers = [4, 2, 5, 1, 3];
console.log(bubbleSort((a, b) => a - b, numbers));
