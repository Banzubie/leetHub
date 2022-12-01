/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    var vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true};
    var count = 0;
    var sLen = s.length / 2
    var sideA = s.slice(0, sLen).split('');
    var sideB = s.slice(sLen).split('');
    for (var i = 0; i < sLen; i++) {
        if (vowels[sideA[i]]) {
            count++;
        }
        if (vowels[sideB[i]]) {
            count--;
        }
    }
    if (count === 0) {
        return true;
    }
    return false;
};