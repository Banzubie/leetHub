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
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    var traveler = (tree) => {
        if (tree.left && !tree.left.left && !tree.left.right) {
            sum += tree.left.val;
        }
        if (tree.right) {
            traveler(tree.right);
        }
        if (tree.left) {
            traveler(tree.left);
        }
        return;
    }
    if (root.left || root.right) {
        traveler(root)
    }
    
    return sum;
};