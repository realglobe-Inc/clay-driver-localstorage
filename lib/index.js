/**
 * LocalStorage driver for ClayDB
 * @module clay-driver-localstorage
 * @version 2.0.3
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
