/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let dq = []
    for (let i = 0; i < nums.length; i++) {
        nums[i] += dq.length ? nums[dq[0]] : 0;
        while (dq.length && (i - dq[0] >= k || nums[i] >= nums[dq[dq.length -1]])) {
            if (nums[i] >= nums[dq[dq.length -1]]) {
                dq.pop();
            } else {
                dq.shift();
            }
        }
        if (nums[i] > 0) {
            dq.push(i);
        }
    }
    return Math.max(...nums)
};