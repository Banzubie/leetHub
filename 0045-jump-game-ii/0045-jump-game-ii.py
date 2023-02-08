class Solution:
    def jump(self, nums: List[int]) -> int:
        size = len(nums)
        if size == 1:
            return 0;
        end = size - 1
        curCov, lastJump = 0, 0
        jumps = 0
        for i in range(size):
            curCov = max(curCov, i + nums[i])
            if i == lastJump:
                lastJump = curCov
                jumps += 1
                if curCov >= end:
                    return jumps
        return jumps
        