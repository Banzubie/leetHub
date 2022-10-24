/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var count = {};
    for (var i = 0; i < s.length; i++) {
        if (!count[s[i]]) {
            count[s[i]] = 1;
        } else {
            count[s[i]]++;
        }
    }
    var result = 0;
    var middle = false;
    for (var key in count) {
        if (count[key] === 1 || count[key] % 2 === 1) {
            middle = true;
        }
        if (count[key] >= 2) {
            if (count[key] % 2 === 0) {
                result += count[key]
            } else {
                result += count[key] - 1
            }
        }
    }
    if (middle) {
        result += 1;
    }
    return result;
};