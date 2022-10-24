/* exported chunk */

/* Define a function with two parameters, array and size
Declare variable with empty array assigned
Define if statement w/ conditions: array.length === 0, return []
  -Else, define for loop w/ conditions: var i = 0; */

function chunk(array, size) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  } else {
    for (var i = 0; i <= array.length - 1; i += size) {
      newArray.push(array.slice(i, i + size));
    }
  }
  return newArray;
}
