# clay-driver-localstorage@2.0.2

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



