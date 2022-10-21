/* exported capitalize */

/* 1. Define a function with one parameter, word
2. Use the .toLowerCase() method to change all characters in the string to lower case, and assign to a new variable
3. Use the .toUpperCase() method on the first character of the string by using the .charAt() method with an argument of 0 and assign it to a new variable
4. Return newest variable */

function capitalize(word) {
  var lowered = word.toLowerCase();
  var firstCharCap = lowered.charAt(0).toUpperCase() + lowered.slice(1);
  return firstCharCap;
}

/* 1. Define the function capitalize(word)
2. Use .toLowerCase() method on word and assign the expression to a new variable lowered
3. Use the .toUpperCase() method on the .chartAt(0) method of the lowered variable and add it to the .slice(1) method of the lowered variable and assign that expression to a new variable firstCharCap
4. Return firstCharCap */
