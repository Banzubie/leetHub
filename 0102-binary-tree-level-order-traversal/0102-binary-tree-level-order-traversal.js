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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var que = [root]
    var result = [];
    
    while (que[0]) {
        var row = [];
        var long = que.length
        for (var i = 0; i < long; i++) {
            var item = que.shift();
            row.push(item.val);
            if (item.left) {
                que.push(item.left);
            }
            if (item.right) {
                que.push(item.right)
            }
        }
        result.push(row)
    }
    return result;
};