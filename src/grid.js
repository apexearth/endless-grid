var Block = require('./block');

module.exports = Grid;

function Grid() {
    var grid = {};
    var minX, maxX, minY, maxY;
    Object.defineProperties(this, {
        minX: {get: () => minX},
        minY: {get: () => minY},
        maxX: {get: () => maxX},
        maxY: {get: () => maxY},
    });

    this.create = function (x, y) {
        minX = minX < x ? minX : x;
        minY = minY < y ? minY : y;
        maxX = maxX > x ? maxX : x;
        maxY = maxY > y ? maxY : y;
        return grid[`${x},${y}`] = new Block(x, y)
    };

    this.get = function (x, y) {
        return grid[`${x},${y}`] || this.create(x, y);
    };
}

