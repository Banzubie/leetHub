
var RandomizedSet = function() {
    this.collection = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.collection.indexOf(val) > -1) {
        return false;
    } else {
        this.collection.push(val)
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.collection.indexOf(val) === -1) {
        return false;
    } else {
        this.collection.splice(this.collection.indexOf(val), 1);
        return true;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.collection[Math.floor(Math.random() * this.collection.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */