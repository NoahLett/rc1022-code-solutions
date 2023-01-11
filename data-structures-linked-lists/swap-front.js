/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else if (list.next !== null) {
    const neck = list.next.data;
    list.next.data = list.data;
    list.data = neck;
    return list;
  }
}
