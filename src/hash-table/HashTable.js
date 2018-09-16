/**
 * private function
 */
let factories = {
  hash: function (value) {
    let total = 0
    let len = value.length
    for (let i = 0; i < len; i++) {
      total += value.charCodeAt(i)
    }
    return total % this.dataTable.length
  }
}

export default class HashTable {
  constructor (size = 137) {
    // default size need more tactics, leave it to be prime number 137 at that
    this.dataTable = new Array(size)
  }

  call (fun, ...args) {
    if (!factories[fun]) {
      return
    }
    return factories[fun].apply(this, args)
  }

  set (key, data) {
    let pos = this.useHash(key)
    this.dataTable[pos] = data
    return this
  }

  get (key) {
    return this.dataTable[this.useHash(key)]
  }

  useHash (value) {
    return this.call('hash', value)
  }

  size () {
    return this.dataTable.length
  }
  display () {
    let result = []
    let len = this.dataTable.length
    for (var i = 0; i < len; i++) {
      if (this.dataTable[i] !== undefined) {
        result.push(`${i} -> ${this.dataTable[i]}`)
      }
    }
    return result
  }
}
