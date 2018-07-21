export default class Queue {
  constructor () {
    this.dataStore = []
  }
  enqueue (element) {
    this.dataStore.push(element)
  }
  dequeue () {
    return this.isEmpty() ? null : this.dataStore.shift()
  }
  front () {
    return this.isEmpty() ? null : this.dataStore[0]
  }
  back () {
    return this.isEmpty() ? null : this.dataStore[this.dataStore.length - 1]
  }
  clear () {
    delete this.dataStore
    this.dataStore = []
  }
  isEmpty () {
    return this.dataStore.length === 0
  }
  getLength () {
    return this.dataStore.length
  }
  toString (callback) {
    return callback ? callback(this.dataStore) : `${this.dataStore}`
  }
}
