/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    var bars = costs.sort((a, b) => a-b);
    var boughtBars = 0;
    console.log(bars)
    for (var i = 0; i < bars.length; i++) {
        if (bars[i] > coins) {
            break;
        }
        coins -= bars[i];
        boughtBars += 1;
    }
    return boughtBars;
};