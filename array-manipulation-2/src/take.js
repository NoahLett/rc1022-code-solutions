/* exported take */

/* Define a function with two parameters, array and count
Declare a variable and assign an empty array to it
Define a for loop that iterates through the parameter array
  - for loop conditions: i = 0; i <= count; i++
    - push array[i] into new array variable
Return new variable */

function take(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  } else {
    for (var i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

/* Define take(array, count)
Declare newArr and assign []
Define if statement w/ condition: array.length === 0, return [], else:
  -Define a for loop w/ conditions: var i = 0; i < count; i++
    -push array[i] into newArr
Return newArr */
