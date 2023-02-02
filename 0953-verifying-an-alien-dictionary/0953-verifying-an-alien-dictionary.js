/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    var alpha = new Map([["", -1]]);
    for (let i = 0; i < order.length; i++) {
        alpha.set(order[i], i)
    }
    for (let i = 1; i < words.length; i++) {
        let a = words[i - 1], b = words[i]
        for (var j = 0; j < a.length; j++) {
            let achar = a.charAt(j), bchar = b.charAt(j), aidx = alpha.get(achar), bidx = alpha.get(bchar);
            if (aidx < bidx) {
                break;
            }
            if (aidx > bidx) {
                return false
            }
        }
    }
    return true;
};