/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) {
        return list1;
    }
    var values = []
    var fillArr = (a) => {
        values.push(a.val)
        if (a.next) {
            fillArr(a.next)
        }
    }
    if (list1) {
        fillArr(list1)
    }
    if (list2) {
       fillArr(list2) 
    }
    values.sort((a,b) => a - b);
    var result = new ListNode(values[0]);
    var last = result;
    values.shift();
    while (values.length > 0) {
        last.next = new ListNode(values[0]);
        values.shift();
        last = last.next;
    }
    return result;
};