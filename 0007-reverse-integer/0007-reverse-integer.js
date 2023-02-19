/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 10 && x > -10) return x;
    let neg = x < 0;
    x = Math.abs(x)
    let ans = 0;
    while (x) {
        let digit = x % 10
        x = Math.floor(x / 10)
        ans *= 10 
        ans += digit
        if (ans > Math.pow(2, 31)) return 0;
    }
    
    return neg ? ans * -1 : ans;
};