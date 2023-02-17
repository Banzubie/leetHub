/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    if (!root) return 0;
    var minDiff = Infinity;
    var stack = [root];
    var vals = [];
    while (stack.length) {
        let node = stack.pop();
        vals.push(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    var sortVal = vals.sort((a, b) => a - b);
    for (var i = 0; i < sortVal.length - 1; i++) {
        minDiff = Math.min(minDiff, sortVal[i + 1] - sortVal[i])
    }
    return minDiff;
};