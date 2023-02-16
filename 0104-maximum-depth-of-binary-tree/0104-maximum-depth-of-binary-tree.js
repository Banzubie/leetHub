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
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
    // if (!root) return 0;
    // var stack = [[root, 1]];
    // var max = 0;
    // while (stack.length) {
    //     let popped = stack.pop();
    //     let node = popped[0]
    //     let depth = popped[1]
    //     if (node.left) {
    //         stack.push([node.left, depth + 1])
    //     }
    //     if (node.right) {
    //         stack.push([node.right, depth + 1])
    //     }
    //     max = Math.max(max, depth);
    // }
    // return max
};