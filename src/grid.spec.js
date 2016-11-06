var expect = require('chai').expect;

var Grid = require('./grid');

describe('grid', () => {
    it('new', () => {
        var grid = new Grid();
        expect(grid.get).to.be.a('function');
    });
    it('.get()', function () {
        var grid = new Grid();

        let block = grid.get(0,0);
        expect(block.x).to.equal(0);
        expect(block.y).to.equal(0);

        expect(grid.minX).to.equal(0);
        expect(grid.minY).to.equal(0);
        expect(grid.maxX).to.equal(0);
        expect(grid.maxY).to.equal(0);

        block = grid.get(100,100);
        expect(block.x).to.equal(100);
        expect(block.y).to.equal(100);

        expect(grid.minX).to.equal(0);
        expect(grid.minY).to.equal(0);
        expect(grid.maxX).to.equal(100);
        expect(grid.maxY).to.equal(100);
    });
});