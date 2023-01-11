/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  list.next = new LinkedList(value, list.next.data, list.next.next.data, list.next.next.next.data);
}
