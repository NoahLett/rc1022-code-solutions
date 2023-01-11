/* exported removeTail */

function removeTail(list) {
  if (list === null || list.next === null) {
    return null;
  }
  let current = list;
  let previous = null;
  while (current.next !== null) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
  return list;
}
