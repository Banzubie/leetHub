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
var reverseList = function(head) {
    if (!head) {
        return null;
    }
    if (head.length === 0) {
        return [];
    }
    var tempArr = [];
    var treeFill = (node) => {
        tempArr.push(node.val);
        if (node.next) {
            treeFill(node.next);
        } else {
            return;
        }
    }
    treeFill(head)
    
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    
    var reverseTree = new ListNode(tempArr[tempArr.length -1]);
    var lastNode = reverseTree;
    for (var i = tempArr.length -2; i >= 0; i--) {
        var temp = new ListNode(tempArr[i])
        lastNode.next = temp;
        lastNode = temp;
    }
    
    return reverseTree;
};