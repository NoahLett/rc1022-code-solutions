/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  list.next.next.next.next = new LinkedList(value);
}
