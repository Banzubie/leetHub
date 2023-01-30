/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 1) return n
    if (n === 2) return 1
    var total = 0;
    var first = 0;
    var second = 1;
    var third = 1;
    for (var i = 3; i <= n; i++) {
        total = first + second + third
        first = second
        second = third
        third = total
    }
    // while (n > 2) {
    //     total = first + second + third
    //     first = second
    //     second = third
    //     third = total
    //     n--
    // }
    return third;
};