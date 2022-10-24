/* exported takeRight */

/* Define an array with two parameters, array and count
Declare a variable and assign an empty array
Define an if statement w/ conditions: array.length === 0
  - Return []
  - Else if count > array
    - Return array
  - Else, define a for loop w/ conditions: var i = count; i < array.length; i++
    -Push array[i] into the variable
Return variable */

function takeRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return [];
  } else if (count > array.length) {
    return array;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* Define takeRight(array, count)
Declare variable newArray and assign empty array
Define if statement w/ conditions: array.length === 0, return []
  - else if count > array.length, return array,
  - else define for loop w/ conditions: counter i starts at array.length - count, as long as i is less than array.length, iterate
    -push array[i] into newArray
Return newArray */
