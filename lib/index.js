/**
 * LocalStoarge driver for ClayDB
 * @module clay-driver-localstorage
 * @version 1.0.0
 */

'use strict'

const create = require('./create')
const JsonDriver = require('./json_driver')

let lib = create.bind(this)

Object.assign(lib, JsonDriver, {
  create,
  JsonDriver
})

module.exports = lib
