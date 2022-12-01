/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var cache = {};
    for (var i = 0; i < arr.length; i++) {
        cache[arr[i]] = cache[arr[i]] + 1 || 1;
    }
    var check = {};
    for (var key in cache) {
        if (check[cache[key]]) {
            return false;
        } else {
            check[cache[key]] = true;
        }
    }
    return true;
};