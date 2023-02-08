/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const size = nums.length;
    if (size === 1) {
        return 0;
    }
    let end = size - 1
    let curCoverage = 0
    let lastJump = 0;
    let jumps = 0;
    for (let i = 0; i < size; i++) {
        curCoverage = Math.max(curCoverage, i + nums[i]);
        if (i === lastJump) {
            lastJump = curCoverage;
            jumps++;
            if (curCoverage >= end) {
                return jumps;
            }
        }
    }
    return jumps;
};