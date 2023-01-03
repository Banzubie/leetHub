/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    
    var delCol = 0;
    
    
    for (let i = 0; i < strs[0].length; i++) {
        let col = '';
        for (let j = 0; j < strs.length; j++) {
            col += strs[j][i];
        }
        if (col !== col.split('').sort().join('')) {
            delCol++;
        }
    }
    
    return delCol;
};