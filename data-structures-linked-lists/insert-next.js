/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const lastPart = list.next;
  const currentNode = list;
  const newNode = new LinkedList(value);
  currentNode.next = newNode;
  currentNode.next.next = lastPart;
}
