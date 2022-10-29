/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var N = cost.length;
    var [a, b, c] = [0, 0, 0];
    
    for (var i = N - 1; 0 <= i; i--) {
        c = cost[i] + Math.min(b, a)
        a = b;
        b = c;
    }
    return Math.min(b, a);
};