/* exported flatten */

/* Define a function with one parameter, array
Declare a variable and assign an empty array to it
Define a for loop that iterates through array
  Define an if statement that checks if array[i] is also an array
    Define another for loop that iterates through array[i]
      push the contents of array[i][x] into the variable
  Else, push the conents of aray[i] into the variable
Return the variable */

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* Define flatten(array)
Declare newArray = [];
Define a for loop w/ conditions: (var i = 0; i < array.length; i++)
  Define an if statement w/ conditions: (Array.isArray(array[i]))
    Define another for loop w/ conditions: (var x = 0; x < array[i].length; x++)
      Push array[i][x] into newArray
  Else, push array[i] into newArray
Return newArray */
