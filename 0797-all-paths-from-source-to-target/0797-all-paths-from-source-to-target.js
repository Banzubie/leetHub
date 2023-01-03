/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var ans = [];
    const traveler = (index, path) => {
        path.push(index)
        if (index === graph.length -1) {
            ans.push(path);
            return;
        }
        for (var i = 0; i < graph[index].length; i++) {
            traveler(graph[index][i], [...path]);
        }
    }
    traveler(0, []);
    return ans;
};