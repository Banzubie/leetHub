/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if ( x < 0) {
        return false;
    }
    var end = 0;
    var copy = x
    while (copy > 0) {
        end = end * 10 + copy%10;
        copy = Math.floor(copy / 10);
    }
    return end === x;
};