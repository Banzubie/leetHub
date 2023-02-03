/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2 || s.length < numRows) return s;
    var rows = new Array(numRows).fill('');
    var forward = true;
    var idx = 0;
    for (var i = 0; i < s.length; i++) {
        rows[idx] += s[i]
        forward ? idx++ : idx--
        if (idx === numRows - 1 || idx === 0) forward = !forward
    }
    return rows.join('');
};