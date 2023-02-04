/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var dict = {};
    var len = s1.length;
    for (let i = 0; i < len; i++) {
        dict[s1[i]] ? dict[s1[i]]++ : dict[s1[i]] = 1
    }
   let left = 0, right = 0
   
   while (right < s2.length) {
       if (dict[s2[right]] > 0) len--;
       dict[s2[right]]--;
       right++;
       if (len === 0) return true;
       if (right - left === s1.length) {
           if (dict[s2[left]] >= 0) len++;
           dict[s2[left]]++;
           left++;
       }
   }
    return false;
};