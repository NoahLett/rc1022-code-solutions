/* exported pick */

/* Define a function with two parameters, source and keys
Declare a new object with empty brackets
Define a for loop that iterates through keys
  Define a for...in loop that checks the contents of source
    Define an if statement w/ conditions: source.property === keys[i], add the property to the new object
Return new object */

function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      obj[keys[i]] = source[keys[i]];
    }
  }
  return obj;
}

/* Define pick(source, keys)
Declare variable obj and assign empty curly braces
Define a for loop that iterates through the length of the keys array
  Define an if statement within the for loop w/ conditions: if the current index of the keys array is within the source object, then assign source[keys[i]] to obj[keys[i]]
return obj */
