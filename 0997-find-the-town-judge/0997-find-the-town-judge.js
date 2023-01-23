/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    var trusted = new Array(n+1).fill(0);
    
    for (let [a, b] of trust) {
        trusted[a]--;
        trusted[b]++;
    }
    for (var i = 1; i < trusted.length; i++) {
        if ((n-1) === trusted[i]) {
            return i;
        }
    }
    return -1;
};