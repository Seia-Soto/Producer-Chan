const sheets = require('./sheets')
const random = require('./random')

module.exports = class {
  constructor(statusCode) {
    this.statusCode = statusCode || 0
    this.status = [
      'inform',
      'error'
    ]

    this.keyTable = {
      length: sheets[this.status[this.statusCode]].length,
      table: sheets[this.status[this.statusCode]],
      extended: sheets.extended
    }
  }

  chain(key) {
    return this.keyTable.extended[key]
  }
  preference() {
    return this.status[this.statusCode]
  }
  print() {
    return this.keyTable.table[random(this.keyTable.length)]
  }
}
