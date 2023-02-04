class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idx = 0
        while True:
            for num in range(idx + 1, len(nums)):
                if nums[idx] + nums[num] == target:
                    return [idx, num]
            idx += 1