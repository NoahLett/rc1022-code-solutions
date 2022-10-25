/* exported ransomCase */

/* Define a function with one parameter, string
Declare a variable and assign an empty string
Define a for loop w/ conditions: var i = 0; i < string.length; i++
  Define an if statement w/ conditions: i % 2 === 0, add string[i].toLowerCase() to newString
    else, add string[i].toUpperCase() to newString
Return newString */

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string.charAt(i).toLowerCase();
    } else {
      newString += string.charAt(i).toUpperCase();
    }
  }
  return newString;
}

/* Define ransomCase(string)
Declare variable newString = '';
Define a for loop w/ conditions: var i = 0; i < string.length; i++
  Define an if statement w/ conditions: i % 2 === 0, newString += string.charAt(i).toLowerCase()
    else, newString += string.charAt(i).toUpperCase()
Return newString */
