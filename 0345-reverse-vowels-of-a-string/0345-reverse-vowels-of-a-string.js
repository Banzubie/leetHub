/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = [];
    var splitted = s.split('');
    
    for (var i = 0; i < splitted.length; i++) {
        if (splitted[i].toLowerCase() === 'a' || splitted[i].toLowerCase() === 'e'
           || splitted[i].toLowerCase() === 'i' || splitted[i].toLowerCase() === 'o' || splitted[i].toLowerCase() === 'u') {
            vowels.push(splitted[i]);
        }
    }
    
    for (var j = 0; j < splitted.length; j++) {
        if (splitted[j].toLowerCase() === 'a' || splitted[j].toLowerCase() === 'e'
           || splitted[j].toLowerCase() === 'i' || splitted[j].toLowerCase() === 'o' || splitted[j].toLowerCase() === 'u') {
            splitted[j] = vowels.pop();
        }
    }
    
    return splitted.join('');
};