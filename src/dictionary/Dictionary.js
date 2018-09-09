export default class Dictionary {
  constructor () {
    this.dataStore = []
  }

  add (key, value) {
    this.dataStore[key] = value
    return this
  }

  remove (key) {
    delete this.dataStore[key]
    return this
  }

  find (key) {
    return this.dataStore[key]
  }

  count () {
    return Object.keys(this.dataStore).length
  }

  clear () {
    Object.keys(this.dataStore).forEach(key => {
      delete this.dataStore[key]
    })
  }

  display () {
    return Object.keys(this.dataStore).map(key => {
      return `${key} -> ${this.dataStore[key]}`
    })
  }
}
