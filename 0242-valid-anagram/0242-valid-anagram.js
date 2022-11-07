/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var cache = {};
    
    for (var i = 0; i < s.length; i++) {
        cache[s[i]] = cache[s[i]] + 1 || 1;
    }
    
    for (var j = 0; j < t.length; j++) {
        if (!cache[t[j]]) {
            return false
        } else {
            cache[t[j]]--;
        }
        
    }
    return true;
};