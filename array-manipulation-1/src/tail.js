/* exported tail */

/* 1. Define a function with one parameter
2. Declare a new variable and assign an empty array to it
3. Define a new for loop with the i counter starting at 1 rather than 0
4. Push the parameter array at index i into the empty array declared earlier
5. Return the new array */

function tail(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

/* 1. Define a new function with one parameter tail(array)
2. Declare variable newArr and assign an empty array to it
3. Define a for loop with the folling conditions: counter i starts at 1, goes the length of the array, and iterates by one each loop
4. Push the parameter array at index i into the variable newArr declared above
5. Return newArr */
