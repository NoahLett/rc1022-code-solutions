/* exported getKeys */

/* 1. Define a functuion with one parameter, object
2. Declare a variable with an empty array assigned
3. Use a for...in loop to iterate through the object's properties and push them into the variable
4. Return variable */

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

/* 1. Define getKeys(object)
2. Declare variable keys and assign empty array
3. Define for...in loop with following condition: (var property in object) push property into keys
4. Return keys */
