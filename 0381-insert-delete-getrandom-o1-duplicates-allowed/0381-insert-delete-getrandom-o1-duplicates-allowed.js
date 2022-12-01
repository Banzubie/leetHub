
var RandomizedCollection = function() {
    this.coll = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    if (this.coll.indexOf(val) > -1) {
        this.coll.push(val);
        return false;
    } else {
        this.coll.push(val);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (this.coll.indexOf(val) === -1) {
        return false;
    } else {
        this.coll.splice(this.coll.indexOf(val), 1);
        return true;
    }
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.coll[Math.floor(Math.random() * this.coll.length)]
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */