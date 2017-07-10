const moment     = require('moment')
const Block      = require('./block.js')
const BlockArray = require('./block-array.js')

/**
 * @param args.start
 * @param args.end
 * @param args.events
 */
function freebusy(args) {

  // defaults
  let busyEvents = args.events || []

  // create free days from start till end
  let firstBlock = new BlockArray( [ new Block(args.start, args.end) ] )

  // reduce freeDays by busy events
  return busyEvents.reduce( (remainingTime, nextEvent) => {
    return remainingTime.subtract(new Block(nextEvent.start, nextEvent.end))
  }, firstBlock).toObject()
}

module.exports = freebusy
