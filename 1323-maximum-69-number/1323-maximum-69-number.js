/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var text = num.toString().split('');
    
    for (var i = 0; i < text.length; i++) {
        if (text[i] === '6') {
            text[i] = '9';
            break;
        }
    }
    
    return Number(text.join(''));
};