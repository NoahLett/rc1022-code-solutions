/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const lastPart = list;
  const newHead = new LinkedList(value);
  newHead.next = lastPart;
  return newHead;
}
