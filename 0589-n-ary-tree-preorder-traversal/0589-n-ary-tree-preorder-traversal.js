/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    var result = [];
    
    var treeTraversal = (tree) => {
        if (!tree) {
            return;
        }
        result.push(tree.val);
        for (var i = 0; i < tree.children.length; i++) {
            treeTraversal(tree.children[i])
        }
        return;
    }
    treeTraversal(root)
    
    return result;
};