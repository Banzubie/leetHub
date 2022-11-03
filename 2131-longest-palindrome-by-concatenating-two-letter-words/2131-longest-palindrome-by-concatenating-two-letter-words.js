/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    var result = 0;
    var map = {};
    
    words.forEach(word => {
       var reverseWord = word[1] + word[0];
        
        if (reverseWord in map) {
            result += 4;
            map[reverseWord]--;
            if (map[reverseWord] === 0) {
                delete map[reverseWord];
            }
        } else {
            map[word] = map[word] ? map[word] + 1 : 1;
        }
    });
    
    for (var word in map) {
        if(word[0] === word[1]) {
            result += 2;
            break;
        }
    }
    return result;
};