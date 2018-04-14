/**
 * Driver to store data into local storages
 * @augments Driver
 * @class LocalStorageDriver
 * @param {string} dirname - Directory name to save data
 * @param {Object} [options={}] - Optional settings
 * @param {string} [options.prefix] - Prefix of key in local storage
 */
'use strict'

const asleep = require('asleep')
const {LogPrefixes} = require('clay-constants')
const {MemoryDriver} = require('clay-driver-memory')
const {serialize, deserialize} = require('clay-serial')
const {get} = require('bwindow')

const {DRIVER_PREFIX} = LogPrefixes

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
  async getStorage (storageKey) {
    const s = this
    await s.waitWhileFlushing()
    let storage = s._storages[storageKey]
    let isEmpty = Object.keys(storage || {}).length === 0
    if (isEmpty) {
      storage = s._storages[storageKey] = (await s.fromLocalStorage(storageKey)) || {}
    }
    return storage
  }

  /** @inheritdoc */
  async delStorage (storageKey) {
    const s = this
    await s.waitWhileFlushing()
    let exists = s._storages.hasOwnProperty(storageKey)
    if (exists) {
      s._storages[storageKey] = {}
      return true
    } else {
      return false
    }
  }

  /** @inheritdoc */
  async drop (resourceName) {
    const superMethod = super.drop.bind(this)
    const dropped = await superMethod(resourceName)
    await this.flush()
    return dropped
  }

  async waitWhileFlushing () {
    while (this._flusing) {
      await asleep(1)
    }
  }

  async flush () {
    await this.waitWhileFlushing()
    this._flusing = true
    await asleep(1)
    for (let storageKey of Object.keys(this._storages)) {
      let data = this._storages[storageKey]
      try {
        await this.toLocalStorage(storageKey, data || {})
      } catch (e) {
        this._flusing = false
        throw e
      }
      delete this._storages[storageKey]
    }
    await asleep(10)
    this._flusing = false
  }

  fromLocalStorage (storageKey) {
    const {localStorage} = this
    const prefixedStorageKey = this.prefixedStorageKey(storageKey)
    const item = localStorage.getItem(prefixedStorageKey)
    if (!item) {
      return null
    }
    let data = JSON.parse(item)
    // TODO deserialize recursively
    return deserialize.all(data)
  }

  toLocalStorage (storageKey, data) {
    const {localStorage} = this
    let prefixedStorageKey = this.prefixedStorageKey(storageKey)
    // TODO serialize recursively
    let serialized = JSON.stringify(serialize.all(data))
    localStorage.setItem(prefixedStorageKey, serialized)
  }

  prefixedStorageKey (storageKey) {
    return [this._prefix, storageKey].filter(Boolean).join(':')
  }

  get localStorage () {
    return get('localStorage', {strict: true})
  }
}

module.exports = LocalStorageDriver
