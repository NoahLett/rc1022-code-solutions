/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (queue.peek() === undefined) {
      return first;
    } else if (queue.peek() !== undefined) {
      queue.enqueue(first);
      const second = queue.dequeue();
      return second;
    }
  }
}
