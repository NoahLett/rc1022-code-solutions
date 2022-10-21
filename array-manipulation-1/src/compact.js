/* exported compact */

/* Do not use slice(), splice(), pop(), shift(), or filter()
Parameters: array
Return value: A new array that maintains the order of truthy statements and removes the following:
  -false
  -null
  -NaN
  -0 and -0
  -undefined
  -'' (empty strings) */

/* 1. Define a new function with one parameter, an array
2. Declare a variable and assign an empty array to it
3. Define a for loop with the following conditions: counter i starts at 0; as long as i is less than the length of the parameter array; add one to counter array at end of each loop
4. Define an if statement with the following condition: typeof parameter[i] !== false or null or NaN or 0 or -0 or undefined or ''
5. Push parameter[i] into the empty array declared above
6. Return the new array */

function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
