/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let combined = scores.map((score, i) => [ages[i], score]);
    combined.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    
    const L = scores.length;
    let res = 0;
    let dp = new Array(L);
    
    for (var i = 0; i < L; i++) {
        const score = combined[i][1];
        dp[i] = score;
        
        for (let j = 0; j < i; j++) {
            if (combined[j][1] >= combined[i][1]) {
                dp[i] = Math.max(dp[i], dp[j] + score)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res;
};