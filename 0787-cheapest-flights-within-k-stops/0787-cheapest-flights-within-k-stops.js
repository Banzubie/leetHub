/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    var totalPrice = Infinity;
    
    var dests = {};
    var visited = {};
    
    flights.forEach((flight) => {
        if (!dests[flight[0]]) {
            dests[flight[0]] = {}
        }
        dests[flight[0]][flight[1]] = flight[2]
    })
    
    var stack = [[dests[src], 0, 0]]
    
    while (stack.length) {
        let city = stack.shift();
        let [destinations, price, stops] = city;
        
        if (stops > k) {
            continue;
        }
        let nextStop = stops + 1;
        if (destinations) {
            Object.keys(destinations).forEach((city) => {
                let updatedPrice = price + destinations[city];
                if (parseInt(city) === parseInt(dst) && updatedPrice < totalPrice) {
                    totalPrice = updatedPrice;
                }
                if (visited[city] < updatedPrice) {
                    return;
                }
                visited[city] = updatedPrice;
                stack.push([dests[city], updatedPrice, nextStop]);
            })
        }
        
    }
   
    return totalPrice === Infinity ? -1 : totalPrice;
};