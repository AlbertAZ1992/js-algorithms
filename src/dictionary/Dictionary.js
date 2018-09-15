export default class Dictionary {
  constructor () {
    this.dataStore = {}
  }

  has (key) {
    return key in this.dataStore
  }

  set (key, value) {
    this.dataStore[key] = value
    return this
  }

  get (key) {
    return this.has(key) ? this.dataStore[key] : null
  }

  remove (key) {
    if (this.has(key)) {
      delete this.dataStore[key]
    }
    return this
  }

  count () {
    return Object.keys(this.dataStore).length
  }

  clear () {
    Object.keys(this.dataStore).forEach(key => {
      delete this.dataStore[key]
    })
  }

  values () {
    return Object.keys(this.dataStore).map(key => {
      return this.dataStore[key]
    })
  }

  display () {
    return Object.keys(this.dataStore).map(key => {
      return `${key} -> ${this.dataStore[key]}`
    })
  }
}
