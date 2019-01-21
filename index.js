#!/usr/bin/env node
const buffer = require('buffer')
const chalk = require('chalk')
const child_process = require('child_process')
const path = require('path')

const context = require('./context')
const sheets = require('./sheets')
const log = require('./log')
const random = require('./random')
const package = require('./package')

const argv = process.argv
const env = process.env

const InApp = child_process.spawn(
  'node',
  argv.splice(2, 1),
  {
    shell: true
  }
)

InApp
  .on('close', code => {
    const ctx = new context(code)
    log[ctx.preference()](
      ctx.print()
      /*ctx.print().replace(/{producerName}/gi, matched => {
        return ctx.chain(matched)
      })*/
    )
  })

InApp.stderr.on('data', data => {
  console.error(data.toString())
})
InApp.stdout.on('data', data => {
  console.log(data.toString())
})
