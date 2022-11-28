/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var index = 0;
    while (true) {
        for (var i = index + 1; i < nums.length; i++) {
            if (nums[index] + nums[i] == target) {
                return [index, i];
            }
        }
        index++;
    }
};