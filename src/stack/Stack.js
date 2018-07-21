export default class Stack {
  constructor () {
    this.dataStore = []
    this.top = 0
  }
  push (element) {
    this.dataStore[this.top++] = element
  }
  pop () {
    return this.top === 0 ? null : this.dataStore[--this.top]
  }
  peak () {
    return this.top === 0 ? null : this.dataStore[this.top - 1]
  }
  toString (callback) {
    return callback ? callback(this.dataStore) : `${this.dataStore}`
  }
  isEmpty () {
    return this.top === 0
  }
  getLength () {
    return this.top
  }
  clear () {
    delete this.dataStore
    this.dataStore = []
    this.top = 0
  }
}
