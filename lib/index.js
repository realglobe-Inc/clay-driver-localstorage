/**
 * LocalStoarge driver for ClayDB
 * @module clay-driver-localstorage
 * @version 1.0.1
 */

'use strict'

const create = require('./create')
const LocalStorageDriver = require('./local_storage_driver')

let lib = create.bind(this)

Object.assign(lib, LocalStorageDriver, {
  create,
  LocalStorageDriver
})

module.exports = lib
