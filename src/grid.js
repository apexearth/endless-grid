var Block = require('./block');

module.exports = Grid;

function Grid() {
    var grid = {};
    var minX, maxX, minY, maxY;
    Object.defineProperty(this, 'minX', {get: () => minX});
    Object.defineProperty(this, 'minY', {get: () => minY});
    Object.defineProperty(this, 'maxX', {get: () => maxX});
    Object.defineProperty(this, 'maxY', {get: () => maxY});

    this.create = function (x, y) {
        minX = minX < x ? minX : x;
        minY = minY < y ? minY : y;
        maxX = maxX > x ? maxX : x;
        maxY = maxY > y ? maxY : y;
        return grid[`${x},${y}`] = new Block(x, y);
    };

    this.get = function (x, y) {
        return grid[`${x},${y}`] || this.create(x, y);
    };

    this.getAdjacent = function (x, y, distance = 1, includeXY = false) {
        var adjacent = [];
        for (var yy = y - distance; yy <= y + distance; yy++) {
            for (var xx = x - distance; xx <= x + distance; xx++) {
                if (includeXY || x !== xx || y !== yy) {
                    adjacent.push(this.get(xx, yy));
                }
            }
        }
        return adjacent;
    };
    this.getRange = function (x1, y1, x2, y2) {
        var blocks = [];
        for (var y = y1; y <= y2; y++) {
            for (var x = x1; x <= x2; x++) {
                blocks.push(this.get(x, y));
            }
        }
        return blocks;
    }

    this.areAdjacent = function (blockA, blockB) {
        return blockA.isAdjacent(blockB);
    }
}

