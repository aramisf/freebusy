var moment = require('moment')

// blocks here are expected to be Block sctrutures, as you can see in the
// `./block.js` file
function BlockArray(blocks) {
  this.blocks = blocks || []
}

BlockArray.prototype.subtract = function (subtrahend) {
  return new BlockArray(Array.prototype.concat.apply([],
    this.blocks.map((block) => block.subtract(subtrahend))
  ))
}

BlockArray.prototype.toObject = function () {
  return this.blocks.map((block) => block.toObject())
}

BlockArray.prototype.getBlocks = function () {
  return Array.prototype.slice.call(this.blocks)
}

module.exports = BlockArray
