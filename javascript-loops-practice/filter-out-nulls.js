/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      delete null;
    } else {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
