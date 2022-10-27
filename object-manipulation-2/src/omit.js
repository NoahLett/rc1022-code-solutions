/* exported omit */

/* Define pick(source, keys)
Declare variable obj and assign empty curly braces
Define a for loop that iterates through the length of the keys array
  Define an if statement within the for loop w/ conditions: if the current index of the keys array is within the source object, delete source[keys[i]]
    else, assign source to obj
return obj */

function omit(source, keys) {
  var obj = {};
  for (var prop in source) {
    if (!keys.includes(prop)) {
      obj[prop] = source[prop];
    }
  } return obj;
}

/* Define omit(source, keys)
Declare variable obj and assign empty curly braces
Define a for...in loop w/ conditions: for variable prop in source
  Define an if statement w/ conditions: if keys does not include prop, then assign source[prop] to obj[prop]
Return obj */
