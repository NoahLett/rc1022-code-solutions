/* exported toObject */

/* 1. Define a function with one parameter, keyValuePair (an array)
2. Declare a variable with an empty object assigned
3. Use a for loop to iterate through the array, and at index[0] use Array.toString() and assign it as a property to the empty object
4. */

function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  object[key] = value;
  return object;
}

/* 1. Define toObject(keyValuePair)
2. Declare variable object and assign empty curly braces
3. Declare variable key and assign keyValuePair[0]
4. Declare variable value and assign keyValuePair[1]
5. Add property and value to empty object
6. Return obejct */
