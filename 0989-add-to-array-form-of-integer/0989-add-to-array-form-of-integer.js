/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    var i = num.length -1
    var res = []
    while (i >= 0 || k > 0) {
        if (i >= 0) {
            res.push((num[i] + k) % 10)
            k = Math.trunc((num[i] + k) / 10)
            i--
        } else {
            res.push(k % 10)
            k = Math.trunc(k / 10)
        }
    }

    return res.reverse();
};