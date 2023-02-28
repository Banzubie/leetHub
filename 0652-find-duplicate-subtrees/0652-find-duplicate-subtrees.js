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
 * @return {TreeNode[]}
 */
function dfs(root, map, res) {
    if (!root) return '#';
    var coll = `${root.val}.${dfs(root.left, map, res)}.${dfs(root.right, map, res)}`;
    map.set(coll, (map.get(coll) || 0) + 1)
    if (map.get(coll) === 2) {
        res.push(root)
    }
    return coll;
}
var findDuplicateSubtrees = function(root) {
    var map = new Map(), res = [];
    dfs(root, map, res);
    return res;
};