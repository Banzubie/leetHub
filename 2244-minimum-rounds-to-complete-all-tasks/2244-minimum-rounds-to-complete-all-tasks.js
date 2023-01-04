/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    var map = new Map();
    var rounds = 0;
    for (var i = 0; i < tasks.length; i++) {
        map.set(tasks[i], (map.get(tasks[i]) !== undefined ? (map.get(tasks[i]) + 1) : 1))
    }
    const iterator = map.values();
    for (var count of iterator) {
        if(count < 2) {
            return -1;
        }
        let temp = parseInt(count / 3) + (count % 3 !== 0 ? 1 : 0);
        rounds += temp;
    }
    return rounds;
};