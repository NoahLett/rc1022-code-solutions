/* exported getTail */

function getTail(list) {
  if (list.next !== null) {
    while (list.next !== null) {
      list = list.next;
    }
    return list.data;
  } else {
    return list.data;
  }
}
