/* exported unique */

/* Define a function with one parameter, array
Declare a new variable and assign an empty array to it
Define a for loop that iterates through the array
  Define an if statement w/ conditions: if the new variable does not include array[i], push array[i] into new variable
Return variable */

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* Define unique(array)
Declare newArray = []
Define a for loop that iterates through array
  Define an if statement w/ conditions: (!newArray.includes(array[i])), push array[i] into newArray
Return newArray */
