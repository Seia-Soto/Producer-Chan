const chalk = require('chalk')

module.exports = {
  inform: message => {
    console.log(`${chalk.black.bgCyan(' INFORM ')}  ${message}`)
  },
  warn: message => {
    console.log(`${chalk.black.bgYellow(' WARN ')}  ${message}`)
  },
  error: message => {
    console.error(`${chalk.black.bgRed(' ERROR ')}  ${message}`)
  }
}
