/* exported initial */

/* 1. Define a function with one parameter
2. Declare a new variable and assign an empty array to it
3. Define a for loop with a conditional of the parameter.length - 1
4. Push the parameter array at index i into the new array declared above
5. Return the new array */

function initial(array) {
  var newArr = [];
  for (var i = 0; i < (array.length - 1); i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

/* 1. Define the function intial(array)
2. Declare variable newArr and assign an empty array to it
3. Define a for loop with the following conditions: counter i starts at 0, goes the length of the parameter array - 1, and iterates by one each loop
4. Push array[i] into newArr
5. Return newArr */
