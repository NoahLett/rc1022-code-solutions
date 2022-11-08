/* exported isPalindromic */

/* Define a function with one parameter, string
Declare a new variable and assign an empty string
Define a for loop that iterates through the length of the string backwards
  Use += to add string[i] to the new variable
Define an if statement that checks if new variable and string are strictly equal
Return true if true */

function isPalindromic(string) {
  var spaceRemoved = '';
  var reversed = '';
  if (string.includes(' ')) {
    spaceRemoved += string.replace(' ', '');
    for (var i = spaceRemoved.length - 1; i >= 0; i--) {
      reversed += spaceRemoved[i];
      if (reversed === spaceRemoved) {
        return true;
      }
    }
  } else {
    for (var x = string.length - 1; x >= 0; x--) {
      reversed += string[x];
      if (reversed === string) {
        return true;
      }
    }
  }
  return false;
}

/* Define isPalindromic(string)
Declare var spaceRemoved = ''
Declare var reversed = ''
Define an if statement that checks if string has a space in it. If true, replace the space with an empty string and assin new value to spaceRemoved
  Define a for loop that iterates through spaceRemoved backwards and assigns spaceRemoved[i] to reversed
    Define an if statement that checks if reversed and spaceRemoved are strictly equal. If true, return true.
Else, define a for loop that iterates through string backwards and assigns string[i] to reversed
  Define an if statement that checks if reversed and string are strictly equal. Return true if true
Return false */
