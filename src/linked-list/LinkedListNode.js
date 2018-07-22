export class LinkedListNode {
  constructor (element) {
    this.element = element
    this.next = null
  }
  toString (callback) {
    return callback ? callback(this.element) : `${this.element}`
  }
}

export class DoublyLinkedListNode {
  constructor(element) {
    this.element = element
    this.next = null
    this.previous = null
  }
  toString(callback) {
    return callback ? callback(this.element) : `${this.element}`
  }
}
