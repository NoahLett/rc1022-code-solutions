/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    indexes.push(index++);
  }
  return indexes;
}
