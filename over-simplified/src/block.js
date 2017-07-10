function Block(start, end) {
  this.start = start
  this.end = end
}

Block.prototype.clone = function() {
  return new Block(this.start, this.end)
}

Block.prototype.subtract = function (subtrahend) {

  let nonoverlapping = subtrahend.start > this.end || subtrahend.end < this.start

  return nonoverlapping ? [this.clone()] : [
    new Block(this.start, subtrahend.start),
    new Block(subtrahend.end, this.end)
  ].filter((b) => b.end > b.start)
}

Block.prototype.toObject = function () {
  return {
    start: this.start,
    end:   this.end
  }
}

Block.prototype.getStart = function () {
  return this.start
}

Block.prototype.getEnd = function () {
  return this.end
}

module.exports = Block
