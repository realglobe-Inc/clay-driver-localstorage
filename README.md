clay-driver-localstorage
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-driver-localstorage
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-driver-localstorage
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-driver-localstorage.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-driver-localstorage
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-driver-localstorage.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-driver-localstorage/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-driver-localstorage
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-driver-localstorage.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-driver-localstorage.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-driver-localstorage
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-driver-localstorage.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-driver-localstorage
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-driver-localstorage.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

LocalStorage driver for ClayDB

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-driver-localstorage --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const LocalStorageDriver = require('clay-driver-localstorage')

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new LocalStorageDriver({})
  })
  /* ... */
}

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.API.md.hbs" Start -->

<a name="section-doc-guides-03-a-p-i-md"></a>

API
---------

# clay-driver-localstorage@2.0.3

LocalStorage driver for ClayDB

+ Functions
  + [create(args)](#clay-driver-localstorage-function-create)
+ [`LocalStorageDriver`](#clay-driver-localstorage-class) Class
  + [new LocalStorageDriver(dirname, options)](#clay-driver-localstorage-class-local-storage-driver-constructor)
  + [driver.getStorage()](#clay-driver-localstorage-class-local-storage-driver-getStorage)
  + [driver.delStorage()](#clay-driver-localstorage-class-local-storage-driver-delStorage)
  + [driver.drop()](#clay-driver-localstorage-class-local-storage-driver-drop)
  + [driver.one(resourceName, id)](#clay-driver-localstorage-class-local-storage-driver-one)
  + [driver.list(resourceName, condition)](#clay-driver-localstorage-class-local-storage-driver-list)
  + [driver.create(resourceName, attributes)](#clay-driver-localstorage-class-local-storage-driver-create)
  + [driver.update(resourceName, id, attributes)](#clay-driver-localstorage-class-local-storage-driver-update)
  + [driver.destroy(resourceName, id)](#clay-driver-localstorage-class-local-storage-driver-destroy)
  + [driver.drop(resourceName)](#clay-driver-localstorage-class-local-storage-driver-drop)
  + [driver.resources()](#clay-driver-localstorage-class-local-storage-driver-resources)

## Functions

<a class='md-heading-link' name="clay-driver-localstorage-function-create" ></a>

### create(args) -> `LocalStorageDriver`

Create a driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-driver-localstorage-class"></a>

## `LocalStorageDriver` Class

Driver to store data into local storages

**Extends**:

+ `Driver`



<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-constructor" ></a>

### new LocalStorageDriver(dirname, options)

Constructor of LocalStorageDriver class

| Param | Type | Description |
| ----- | --- | -------- |
| dirname | string | Directory name to save data |
| options | Object | Optional settings |
| options.prefix | string | Prefix of key in local storage |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-getStorage" ></a>

### driver.getStorage()



<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-delStorage" ></a>

### driver.delStorage()



<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-drop" ></a>

### driver.drop()



<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-one" ></a>

### driver.one(resourceName, id) -> `Promise.<ClayEntity>`

Get single entity from resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-list" ></a>

### driver.list(resourceName, condition) -> `Promise.<ClayCollection>`

List entities from resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| condition | ListCondition | List condition query |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-create" ></a>

### driver.create(resourceName, attributes) -> `Promise.<ClayEntity>`

Create a new entity with resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| attributes | Object | Resource attributes to create |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-update" ></a>

### driver.update(resourceName, id, attributes) -> `Promise.<ClayEntity>`

Update an existing entity in resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |
| attributes | Object | Resource attributes to update |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-destroy" ></a>

### driver.destroy(resourceName, id) -> `Promise.<number>`

Delete a entity resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-drop" ></a>

### driver.drop(resourceName) -> `Promise.<boolean>`

Drop resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |


<a class='md-heading-link' name="clay-driver-localstorage-class-local-storage-driver-resources" ></a>

### driver.resources() -> `Promise.<Resource>`

List resources






<!-- Section from "doc/guides/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-driver-localstorage/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
