/**
 * Create a driver instance
 * @function create
 * @param {...*} args
 * @returns {LocalStorageDriver}
 */
'use strict'

const LocalStorageDriver = require('./local_storage_driver')

/** @lends create */
function create (...args) {
  return new LocalStorageDriver(...args)
}

module.exports = create
