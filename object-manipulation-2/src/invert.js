/* exported invert */

/* Define a function with one parameter, source
Declare a new variable and assign empty curly braces
Define a for...in statement w/ conditions: for (var property in source, assign property to obj at source at property
Return obj */

function invert(source) {
  var obj = {};
  for (var property in source) {
    obj[source[property]] = property;
  }
  return obj;
}

/* Define inver(source)
Declare variable obj and assign empty curly braces
Define for...in loop w/ conditions: (var property in source), obj[source[property]] = property;
Return obj */
