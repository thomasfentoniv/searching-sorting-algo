/**
 * Recursively sorts an array using the merge sort algorithm.
 * It divides an array into smaller sub-arrays, sorts them, then merges them
 * This particular function is limited to an array numbers
 */
function mergeSort(arr) {
  if (Array.isArray(arr)) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

/**
 * Merges two sorted arrays into one.
 * This is a helper function for the merge sort algorithm.
 */
function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const elements = [260, 926, 954, 208, 669, 183];
console.log(mergeSort(elements));
