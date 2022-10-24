/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0];
    var max = prices[0];
    var collection = [];
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            collection.push(max - min);
            min = prices[i]
            max = min
        }
        if (prices[i] > max) {
            max = prices[i]
        }
    }
    collection.push(max - min);
    var result = 0;
    for (var j = 0; j < collection.length; j++) {
        if (collection[j] > result) {
            result = collection[j];
        }
    }
    return result;
};