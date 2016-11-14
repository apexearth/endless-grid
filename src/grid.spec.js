var expect = require('chai').expect;

var Grid = require('./grid');
var Block = require('./block');

describe('grid', () => {
    it('new', () => {
        let grid = new Grid();
        expect(grid.get).to.be.a('function');
        expect(grid.getAdjacent).to.be.a('function');
    });
    it('.get()', function () {
        let grid = new Grid();

        let block = grid.get(0, 0);
        expect(block.x).to.equal(0);
        expect(block.y).to.equal(0);

        expect(grid.minX).to.equal(0);
        expect(grid.minY).to.equal(0);
        expect(grid.maxX).to.equal(0);
        expect(grid.maxY).to.equal(0);

        block = grid.get(100, 100);
        expect(block.x).to.equal(100);
        expect(block.y).to.equal(100);

        expect(grid.minX).to.equal(0);
        expect(grid.minY).to.equal(0);
        expect(grid.maxX).to.equal(100);
        expect(grid.maxY).to.equal(100);
    });
    it('.getAdjacent()', function () {
        let grid = new Grid();
        let i = 0;
        let adjacent = grid.getAdjacent(1, 1);
        adjacent.forEach(block => expect(block.constructor).to.equal(Block));
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,2');

        i = 0;
        adjacent = grid.getAdjacent(0, 0, 2, true);
        adjacent.forEach(block => expect(block.constructor).to.equal(Block));
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-2,-2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-1,-2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,-2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,-2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,-2');

        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-2,-1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-1,-1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,-1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,-1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,-1');

        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-2,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-1,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,0');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,0');

        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-2,1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-1,1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,1');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,1');

        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-2,2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('-1,2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('0,2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('1,2');
        expect(`${adjacent[i].x},${adjacent[i++].y}`).to.equal('2,2');
    });
    it('.getRange()', function () {
        let grid = new Grid();
        var blocks = grid.getRange(-2, -2, 10, 10);
        var expectX = -2;
        var expectY = -2;

        for (var i = 0; i < blocks.length; i++) {
            expect(blocks[i].x).to.equal(expectX);
            expect(blocks[i].y).to.equal(expectY);
            if (expectX++ === 10) {
                expectX = -2;
                expectY++;
            }
        }

        blocks = grid.getRange(0, 0, 0, 0);
        expect(blocks.length).to.equal(1);

        blocks = grid.getRange(0, 0, -1, 0);
        expect(blocks.length).to.equal(0);
    });
    it('.areAdjacent()', function () {
        let grid = new Grid();
        expect(grid.areAdjacent(grid.get(0, 0), grid.get(0, 0))).to.equal(false);
        expect(grid.areAdjacent(grid.get(0, 1), grid.get(0, 0))).to.equal(true);
        expect(grid.areAdjacent(grid.get(0, 2), grid.get(0, 0))).to.equal(false);
        expect(grid.areAdjacent(grid.get(0, -1), grid.get(0, 0))).to.equal(true);
        expect(grid.areAdjacent(grid.get(0, -2), grid.get(0, 0))).to.equal(false);
        expect(grid.areAdjacent(grid.get(0, 0), grid.get(0, 0))).to.equal(false);
        expect(grid.areAdjacent(grid.get(1, 0), grid.get(0, 0))).to.equal(true);
        expect(grid.areAdjacent(grid.get(2, 0), grid.get(0, 0))).to.equal(false);
        expect(grid.areAdjacent(grid.get(-1, 0), grid.get(0, 0))).to.equal(true);
        expect(grid.areAdjacent(grid.get(-2, 0), grid.get(0, 0))).to.equal(false);
    });
});
