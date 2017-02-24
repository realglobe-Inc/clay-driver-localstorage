'use strict'

const LocalStorageDriver = require('clay-driver-localstorage')

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new LocalStorageDriver({})
  })
  /* ... */
}
