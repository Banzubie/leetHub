/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var ans = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = j + i;
            while (left >= 0 && s[left] === s[right]) {
                right++;
                left--;
            }
            if ((right - left - 1) > ans.length) {
                ans = s.substring(left + 1, right);
            }
        }
        if (Math.ceil(ans.length / 2) >= s.length - i) break;
    }
    return ans;
};