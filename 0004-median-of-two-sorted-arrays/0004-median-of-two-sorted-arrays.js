/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combined = nums1.concat(nums2).sort((a, b) => a - b)
    let middle = Math.floor((combined.length) / 2)
    if (combined.length % 2 === 0) {
        return (combined[middle-1] + combined[middle]) / 2
    } else {
        return combined[middle]
    }
};