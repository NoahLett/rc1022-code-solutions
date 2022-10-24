/* exported includes */

/* Define a function with two parameters, array and value
Declare a variable with no assignment
Define a for loop to iterate through the array parameter
  - Define an if statement that checks if value is equal to array[i]
    - If yes, assign true to variable
    - If no, assign false to variable
Return variable */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

/* Define includes(array, value)
Define a for loop w/ conditions: counter i starts at 0, as long as i < the length of array, iterate
Define an if statement w/conditions: if value ever strictly equals array[i], return true
Return false */
