/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0 || strs === undefined) {
        return '';
    }
    
    return strs.reduce((prev, next) => {
            console.log('Prev: ', prev, 'Next: ', next)
            let i = 0;
            while (prev[i] && next[i] && prev[i] === next[i]) {
        i++
    }
    return prev.slice(0, i);
    });
};