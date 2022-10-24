/* exported drop */

/* Define a function with 2 parameters, array and count
Declare a variable newArr and assign an empty array
Define an if statement that returns [] if array.length === 0
  else, run a for loop with the following conditions: (var i = count; i < array.length; i++) and push array[i] into newArr
Return newArr */

function drop(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  } else {
    for (var i = count; i < array.length; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

/* Define drop(array, count)
Declare newArr = []
Define an if statement w/ conditions: array.length === 0, return [], else:
  -Define for loop w/ conditions: var i = count; i < array.length; i++
    -Push array[i] into newArr
Return newArr */
