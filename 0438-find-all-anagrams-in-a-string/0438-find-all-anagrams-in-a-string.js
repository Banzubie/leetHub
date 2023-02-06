/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    const dict = {};
    for (let i = 0; i < p.length; i++) {
        dict[p[i]] ? dict[p[i]]++ : dict[p[i]] = 1;
    }
    
    let left = 0;
    let right = 0;
    let count = p.length;
    
    while (right < s.length) {
        if (dict[s[right]] > 0) count--;
        dict[s[right]]--;
        right++;
        if (count === 0) result.push(left);
        if (right - left === p.length) {
            if (dict[s[left]] >= 0) count++;
            dict[s[left]]++;
            left++;
        }
    }
    return result;
};