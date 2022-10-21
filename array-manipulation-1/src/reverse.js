/* exported reverse */

/* 1. Define a new function with one parameter, an array
2. Declare a new variable and assign an empty array to it
3. Define a for loop with the following conditions: counter i starts at the parameter array's length, loops as long as i > 0, and i--
4. Push array[i] into the new array declared above
5. Return the new array declared in the function */

function reverse(array) {
  var newArr = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

/* 1. Define the function reverse(array)
2. Declare a new variable newArr and assign an empty array to it
3. Define a for loop with the following conditions: counter i starts at array.length - 1; i >= 0; i--
4. Push array[i] into newArr
5. Return newArr */
