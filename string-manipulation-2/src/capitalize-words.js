/* exported capitalizeWords */

/* Define a function with one parameter, string
Declare a new variable1 and assign empty string
Declare a new variable2 and assign parameter string.toLowerCase()
Define a for loop w/ conditions: var i = 0; i < variable2.length; i++
  Define an if statement w/ conditions: variable.charAt(i) === ' ', variable1 += variable2.charAt(i + 1).toUpperCase()
    else, variable1 += variable2.charAt(i)
Return variable 1 */

function capitalizeWords(string) {
  var loweredString = string.toLowerCase();
  var arrayOfString = loweredString.split(' ');
  for (var i = 0; i < arrayOfString.length; i++) {
    arrayOfString[i] = arrayOfString[i][0].toUpperCase() + arrayOfString[i].substr(1);
  }
  var newString = arrayOfString.join(' ');
  return newString;
}

/* Define capitalizeWords(string)
Declare lowerStirng and make all characters lower case
Declare arrayOfString and turn string into array with spaces
Define for loop that iterates through array, and assign a new string with the first character capitalized to arrayOfString[i]
Declare newString and assign the joined version of arrayOfString with a single space as it's argument
Return newString */
