/* exported getStudentNames */
function getStudentNames(students) {
  var newArr = [];
  for (var i = 0; i < students.length; i++) {
    for (var key in students[i]) {
      newArr.push(students[i][key]);
    }
  }
  return newArr;
}
