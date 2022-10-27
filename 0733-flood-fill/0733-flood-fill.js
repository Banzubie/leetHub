/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const main = image[sr][sc];
    if(color === main) return image;
    
    const swapper = (row, col) => {
        if(row >= image.length || row < 0 || col >= image[0].length || col < 0 || image[row][col] !== main) return;
        image[row][col] = color;
        swapper(row, col+1)
        swapper(row, col-1)
        swapper(row + 1, col)
        swapper(row-1, col)
        return image;
    }
    return swapper(sr, sc)
};