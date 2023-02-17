# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        self.ans = float('inf')
        self.pred = None
        self.inOrder(root)
        return self.ans
    
    
    def inOrder(self, node: TreeNode) -> None:
        if not node: return
        
        self.inOrder(node.left)
        if self.pred is not None:
            self.ans = min(self.ans, node.val - self.pred)
        self.pred = node.val
        self.inOrder(node.right)
        