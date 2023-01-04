/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    var cache = {};
    var rounds = 0;
    for (var i = 0; i < tasks.length; i++) {
        cache[tasks[i]] = cache[tasks[i]] + 1 || 1;
    }
    for (var count in cache) {
        if(cache[count] < 2) {
            return -1;
        }
        let temp = parseInt(cache[count] / 3) + (cache[count] % 3 !== 0 ? 1 : 0);
        rounds += temp;
    }
    return rounds;
};