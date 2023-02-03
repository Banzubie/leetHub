/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var rows = {}
    var forward = true;
    var idx = 0;
    for (var i = 0; i < s.length; i++) {
        rows[idx] ? rows[idx] += s[i] : rows[idx] = s[i]
        if (forward) {
            if (idx === numRows - 1) {
                forward = false;
                idx--
            } else {
                idx++
            }
        } else {
            if (idx === 0) {
                forward = true;
                idx++
            } else {
                idx--
            }
        }
    }
    return Object.values(rows).join('');
};