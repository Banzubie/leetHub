/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let prev = [];
    for (let i = 0; i <= word2.length; i++) {
        prev.push(i)
    }
    let cur = new Array(word2.length + 1).fill(0);

    for (let i = 1; i <= word1.length; i++) {
        cur[0] = i
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i-1] === word2[j-1]) {
                cur[j] = prev[j-1]
            } else {
                cur[j] = Math.min(prev[j-1] + 1, prev[j] + 1, cur[j-1] + 1)
            }
        }
        prev = cur
        cur = new Array(word2.length + 1).fill(0)
    }
    return prev[prev.length - 1]
};