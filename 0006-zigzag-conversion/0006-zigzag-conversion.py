class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        
        l = [''] * numRows
        idx = 0
        inc = 1
        
        for let in s:
            l[idx] += let
            if idx == numRows - 1:
                inc = -1
            elif idx == 0:
                inc = 1
            idx += inc
        return ''.join(l)