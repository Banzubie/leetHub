/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var begin = false;
    var count = 0;
    for (var i = s.length -1; i >= 0; i--) {
        if (s[i] !== ' ') begin = true;
        if (!begin) continue
        if (s[i] === ' ') break;
        count++;
    }
    return count;
};