/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let map = {};
    let res = 0;
    for (let idea of ideas) {
        let index = idea.charCodeAt(0) - 'a'.charCodeAt(0)
        if (!map[index]) {
           map[index] = new Set()  
        }
        map[index].add(idea.slice(1));
    }
    let arr = Object.keys(map);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let setA = map[arr[i]]
            let setB = map[arr[j]]
            let common = new Set([...setA].filter((item)=> setB.has(item)))
            res += 2 * (setA.size - common.size) * (setB.size - common.size)
        }
    }
    return res;
};