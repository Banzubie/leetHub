/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const row = strs.length - 1;
    const col = strs[0].length;
    var delCol = 0;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (strs[j][i]>strs[j+1][i]) {
                delCol++;
                break;
            }
        }
    }
    
    return delCol;
};