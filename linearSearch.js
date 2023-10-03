/**
 * Finds the index of an element in an array using a linear search algorithm.
 * It's generally slower than other search algorithms for large datasets.
 */
function indexOf(isMatch, elements) {
  if (Array.isArray(elements)) {
    for (let index = 0, length = elements.length; index < length; index++) {
      if (isMatch(elements[index], index, elements)) {
        return index;
      }
    }
  }
  return -1;
}

// Sample usage with people dataset
const people = [
  {
    id: 1,
    first_name: "Monah",
    last_name: "Yarnall",
    age: 17,
  },
  {
    id: 2,
    first_name: "Daphne",
    last_name: "McGaugey",
    age: 81,
  },
  {
    id: 3,
    first_name: "Walker",
    last_name: "Bucknell",
    age: 81,
  },
];

// Comparator function checking if person's age is 81
function personIs81(person) {
  return person.age === 81;
}

console.log(indexOf(personIs81, people));

// Comparator function checking if the number is 5
function numberIs5(value) {
  return value === 5;
}

console.log(indexOf(numberIs5, [1, 3, 5, 7, 9]));
