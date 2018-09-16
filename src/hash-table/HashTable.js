/**
 * private function
 */
let factories = {
  hash: function (value) {
    let total = 0
    let len = this.dataTable.length
    for (let i = 0; i < len; i++) {
      total += value.charCodeAt(i)
    }
    return total % len
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
  }

  get (key) {
    return this.dataTable[this.useHash(key)]
  }

  useHash (value) {
    this.call('hash', value)
  }

  display () {
    return this.dataTable.map(key => {
      return `${key} -> ${this.dataTable[key]}`
    })
  }
}
