/**
 * Test case for localStorageDriver.
 * Runs with mocha.
 */
'use strict'

const LocalStorageDriver = require('../lib/local_storage_driver.js')
const { ok, equal, deepEqual } = require('assert')
const injectmock = require('injectmock')
const clayDriverTests = require('clay-driver-tests')
const co = require('co')

describe('local-storage-driver', function () {
  this.timeout(3000)

  before(() => co(function * () {
    let mockStore = {}
    injectmock(global, 'window', {
      'localStorage': {
        getItem (key) {
          return mockStore[ key ]
        },
        setItem (key, value) {
          mockStore[ key ] = value
        }
      }
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Local storage driver', () => co(function * () {
    let driver = new LocalStorageDriver()

    let created = yield driver.create('users', {
      username: 'okunishinishi'
    })
    let created2 = yield driver.create('users', {
      username: 'hoge'
    })
    ok(created2.id !== created.id)
    ok(created.id)
    equal(created.username, 'okunishinishi')

    let one = yield driver.one('users', created.id)

    equal(String(created.id), String(one.id))

    let updated = yield driver.update('users', one.id, {
      password: 'hogehoge'
    })
    equal(String(updated.id), String(one.id))
    equal(updated.password, 'hogehoge')

    let list = yield driver.list('users', {
      filter: { username: 'okunishinishi' }
    })

    deepEqual(list.meta, { offset: 0, limit: 100, length: 1, total: 1 })
  }))

  it('Run clayDriverTests', () => co(function * () {
    let driver = new LocalStorageDriver()
    yield clayDriverTests.run(driver)
  }))
})

/* global global,describe, before, after, it */
