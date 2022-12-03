/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   
    var charMap = s.split('').reduce((acc, cur) => {acc[cur] = acc[cur] + 1 || 1; return acc}, {});
    var sorted = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);

    return sorted.reduce((a, c) => a + c.repeat(charMap[c]), '')
};