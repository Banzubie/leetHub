/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    var players = {};
    for (var i = 0; i < matches.length; i++) {
        players[matches[i][0]] = players[matches[i][0]] || 0;
        players[matches[i][1]] = players[matches[i][1]] + 1 || 1;
    }
    var colA = [];
    var colB = [];
    for (var key in players) {
        if (players[key] === 0) {
            colA.push(key)
        }
        if (players[key] === 1) {
           colB.push(key) 
        }
    }
    return [colA, colB]
};