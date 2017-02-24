# clay-driver-localstorage@1.0.1

LocalStoarge driver for ClayDB

+ Functions
  + [create(args)](#clay-driver-localstorage-function-create)
+ [`LocalStorageDriver`](#clay-driver-localstorage-classes) Class
  + [new LocalStorageDriver(dirname, options)](#clay-driver-localstorage-classes-local-storage-driver-constructor)
  + [driver.getStorage()](#clay-driver-localstorage-classes-local-storage-driver-getStorage)
  + [driver.delStorage()](#clay-driver-localstorage-classes-local-storage-driver-delStorage)
  + [driver.drop()](#clay-driver-localstorage-classes-local-storage-driver-drop)
  + [driver.one(namespace, id)](#clay-driver-localstorage-classes-local-storage-driver-one)
  + [driver.list(namespace, condition)](#clay-driver-localstorage-classes-local-storage-driver-list)
  + [driver.create(namespace, attributes)](#clay-driver-localstorage-classes-local-storage-driver-create)
  + [driver.update(namespace, id, attributes)](#clay-driver-localstorage-classes-local-storage-driver-update)
  + [driver.destroy(namespace, id)](#clay-driver-localstorage-classes-local-storage-driver-destroy)

## Functions

<a class='md-heading-link' name="clay-driver-localstorage-function-create" ></a>

### create(args) -> `LocalStorageDriver`

Create a driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-driver-localstorage-classes"></a>

## `LocalStorageDriver` Class

Driver to store data into local storages

**Extends**: 

+ `Driver`



<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-constructor" ></a>

### new LocalStorageDriver(dirname, options)

Constructor of LocalStorageDriver class

| Param | Type | Description |
| ----- | --- | -------- |
| dirname | string | Directory name to save data |
| options | Object | Optional settings |
| options.prefix | string | Prefix of key in local storage |


<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-getStorage" ></a>

### driver.getStorage()



<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-delStorage" ></a>

### driver.delStorage()



<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-drop" ></a>

### driver.drop()



<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-one" ></a>

### driver.one(namespace, id) -> `Promise.<ClayEntity>`

Get single resource from namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namespace to work with |
| id | ClayId | Resource id |


<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-list" ></a>

### driver.list(namespace, condition) -> `Promise.<ClayCollection>`

List resource in namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namespace to work with |
| condition | ListCondition | List condition query |


<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-create" ></a>

### driver.create(namespace, attributes) -> `Promise.<ClayEntity>`

Create data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| attributes | Object | Resource attributes to create |


<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-update" ></a>

### driver.update(namespace, id, attributes) -> `Promise.<ClayEntity>`

Update data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| id | ClayId | Resource id |
| attributes | Object | Resource attributes to update |


<a class='md-heading-link' name="clay-driver-localstorage-classes-local-storage-driver-destroy" ></a>

### driver.destroy(namespace, id) -> `Promise.<number>`

Delete data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| id | ClayId | Resource id |




