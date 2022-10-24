/* exported dropRight */

/* Define a function with two parameters, array and count
Declare a variable and assign an empty array
Define an if statement w/ conditions: array.length === 0, then return []
  - Else, define a for loop w/ conditions: var i = array.length - count, i > 0; i--
    -Push array[i] into variable
Return variable */

function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  } else {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* Define dropRight(array, count)
Declare var newArray = []
Define if statement w/ conditions: array.length === 0, return []
  - Else, define for loop w/ conditions: var i = 0; i < array.length - count; i++
    - Push array[i] into newArray
Return newArray */
