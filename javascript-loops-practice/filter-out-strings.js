/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      delete 'string';
    } else {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
