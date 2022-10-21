/* exported getValues */

/* 1. Define a function with one parameter, object
2. Declare a variable and assign an empty array
3. Use a for...in loop to iterate through the values of the properties of the object, and push the values into the variable
4. Return the variable */

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

/* 1. Define getValues(object)
2. Declare variable values and assign an empty arry
3. Define a for loop with the following condition: var key in object; push object[key] into values
4. Return values */
