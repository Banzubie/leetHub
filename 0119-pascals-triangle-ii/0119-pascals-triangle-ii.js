/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [1];
    var temp = result.slice();;
    while (rowIndex > 0) {
        rowIndex--;
        for (var i = 0; i < result.length; i++) {
            result[i] += temp[i - 1] || 0;
        }
        temp = result.slice();
        result.push(1);
    }
    
    return result;
};