/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const lastPart = list.next.next;
    list.next = lastPart;
  }
}
