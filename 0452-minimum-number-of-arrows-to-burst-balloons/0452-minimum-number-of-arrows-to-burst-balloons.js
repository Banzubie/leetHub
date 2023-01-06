/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let prev = null;
    let arrows = 0;
    for (let [start, end] of points) {
        if (prev == null || prev < start) {
            arrows++;
            prev = end;
        } else {
            prev = Math.min(prev, end)
        }
    }
    return arrows;
};