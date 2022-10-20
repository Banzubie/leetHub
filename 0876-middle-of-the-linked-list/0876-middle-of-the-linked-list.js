/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var counter = 1;
    var copyHead = head;
    while (copyHead.next) {
        counter++;
        copyHead = copyHead.next;
    }
    if (counter % 2 === 0) {
        counter = counter / 2;
    } else {
        counter = Math.floor(counter / 2)
    }
    while (counter > 0) {
        counter--;
        head = head.next;
    }
    return head;
};