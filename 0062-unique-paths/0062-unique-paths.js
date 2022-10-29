/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var row = new Array(n);
    
    for (var i = 0; i < n; i++) {
        row[i] = 1;
    }
    for (var r = 1; r < m; r++) {
        for (var j = 1; j < n; j++) {
            row[j] += row[j - 1];
        }
    }
    return row[n -1];
};