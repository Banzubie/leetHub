/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var result = -1;
    var rightIndex = nums.length - 1;
    var leftIndex = 0;
    while (nums.length > 0) {
        var left = nums.shift();
        var right = nums.pop();
        if (left === target) {
            result = leftIndex;
            break;
        }
        if (right === target) {
            result = rightIndex;
            break;
        }
        leftIndex++;
        rightIndex--;
    }
    
    return result;
};