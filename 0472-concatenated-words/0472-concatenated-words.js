/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    var dict = new Set(words)
    var res = [];
    const isConcat = (word) => {
        if (dict.has(word)) {
            return true;
        }
        for (let i = 0; i < word.length; i++) {
            let prefix = word.slice(0, i + 1);
            if (dict.has(prefix)) {
                let suffix = word.slice(i + 1);
                let result = isConcat(suffix);
                if (result) {
                    dict.add(word);
                    return true;
                }
            }
        }
        return false;
    }
    for (var word of words) {
        dict.delete(word);
        if (isConcat(word)) {
            res.push(word);
        }
        dict.add(word);
    }
    return res;
};