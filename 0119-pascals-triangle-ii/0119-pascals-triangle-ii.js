/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [1];
    while (rowIndex > 0) {
        rowIndex--;
        var temp = result.slice();
        for (var i = 0; i < result.length; i++) {
            result[i] += temp[i - 1] || 0;
        }
        result.push(1);
    }
    
    return result;
};