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
        if (cache[count] === 1) {
            return -1;
        }
        while (cache[count] !== 0) {
            if (cache[count] === 4 || cache[count] === 2) {
                cache[count] -= 2;
                rounds++;
            } else {
               cache[count] -= 3;
                rounds++; 
            }
        }
    }
    return rounds;
};