/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var unlocked = new Array(rooms.length).fill(0);
    
    var nextDoor = (room) => {
        if (unlocked[room] === 1) {
            return;
        }
        unlocked[room] = 1;
        for (var i = 0; i < rooms[room].length; i++) {
            nextDoor(rooms[room][i]);
        }
    }
    nextDoor(0);
    
    for (var i = 0; i < unlocked.length; i++) {
        if (unlocked[i] === 0) {
            return false;
        }
    }
    return true;
};