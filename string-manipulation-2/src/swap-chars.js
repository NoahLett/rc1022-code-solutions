/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      newString += string.charAt(firstIndex);
    } else {
      newString += string.charAt(i);
    }
  }
  return newString;
}
