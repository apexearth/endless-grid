class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isAdjacent(other) {
        return (
            (this.x != other.x || this.y != other.y) &&
            Math.abs(this.x - other.x) <= 1 &&
            Math.abs(this.y - other.y) <= 1
        );
    }
}
module.exports = Block;
