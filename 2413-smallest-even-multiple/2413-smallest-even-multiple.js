/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if (n % 2 === 0) {
        return n;
    } else {
        var t = 2;
        while (t !== n) {
            if (t < n) {
             t += 2;   
            } else {
                n += n;
            }
        }
        return n;
    }
    
};