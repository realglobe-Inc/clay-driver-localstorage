/**
 * Driver to store data into local storages
 * @augments Driver
 * @class LocalStorageDriver
 * @param {string} dirname - Directory name to save data
 * @param {Object} [options={}] - Optional settings
 * @param {string} [options.prefix] - Prefix of key in local storage
 */
'use strict'

const co = require('co')
const asleep = require('asleep')
const { LogPrefixes } = require('clay-constants')
const { MemoryDriver } = require('clay-driver-memory')
const { serialize, deserialize } = require('clay-serial')
const { get } = require('bwindow')

const { DRIVER_PREFIX } = LogPrefixes

/** @lends LocalStorageDriver */
class LocalStorageDriver extends MemoryDriver {
  constructor (dirname = 'var/clay', options = {}) {
    super()
    const s = this
    let {
      flashInterval = 300,
      prefix = 'clay'
    } = options
    s._prefix = prefix
    s._dirname = dirname
    s._flusing = false
    s._flushTimer = setInterval(() => s.flush(), flashInterval).unref()
    s._storages = {}
  }

  /** @inheritdoc */
  getStorage (storageKey) {
    const s = this
    return co(function * () {
      yield s.waitWhileFlushing()
      let storage = s._storages[ storageKey ]
      let isEmpty = Object.keys(storage || {}).length === 0
      if (isEmpty) {
        storage = s._storages[ storageKey ] = (yield s.fromLocalStorage(storageKey)) || {}
      }
      return storage
    })
  }

  /** @inheritdoc */
  delStorage (storageKey) {
    const s = this
    return co(function * () {
      yield s.waitWhileFlushing()
      let exists = s._storages.hasOwnProperty(storageKey)
      if (exists) {
        s._storages[ storageKey ] = {}
        return true
      } else {
        return false
      }
    })
  }

  /** @inheritdoc */
  drop (resourceName) {
    const s = this
    let superMethod = super.drop.bind(s)
    return co(function * () {
      let dropped = yield superMethod(resourceName)
      yield s.flush()
      return dropped
    })
  }

  waitWhileFlushing () {
    const s = this
    return co(function * () {
      while (s._flusing) {
        yield asleep(1)
      }
    })
  }

  flush () {
    const s = this
    return co(function * () {
      yield s.waitWhileFlushing()
      s._flusing = true
      yield asleep(1)
      for (let storageKey of Object.keys(s._storages)) {
        let data = s._storages[ storageKey ]
        try {
          yield s.toLocalStorage(storageKey, data || {})
        } catch (e) {
          s._flusing = false
          throw e
        }
        delete s._storages[ storageKey ]
      }
      yield asleep(10)
      s._flusing = false
    })
  }

  fromLocalStorage (storageKey) {
    const s = this
    const { localStorage } = s
    return co(function * () {
      let prefixedStorageKey = s.prefixedStorageKey(storageKey)
      let item = localStorage.getItem(prefixedStorageKey)
      if (!item) {
        return null
      }
      let data = JSON.parse(item)
      // TODO deserialize recursively
      return deserialize.all(data)
    })
  }

  toLocalStorage (storageKey, data) {
    const s = this
    const { localStorage } = s
    return co(function * () {
      let prefixedStorageKey = s.prefixedStorageKey(storageKey)
      // TODO serialize recursively
      let serialized = JSON.stringify(serialize.all(data))
      localStorage.setItem(prefixedStorageKey, serialized)
    })
  }

  prefixedStorageKey (storageKey) {
    const s = this
    return [ s._prefix, storageKey ].filter(Boolean).join(':')
  }

  get localStorage () {
    return get('localStorage', { strict: true })
  }
}

module.exports = LocalStorageDriver
