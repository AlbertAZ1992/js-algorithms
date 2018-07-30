import { DoublyLinkedListNode as Node } from './LinkedListNode.js'

export default class DoublyLinkedList {
  constructor () {
    this.head = new Node('head')
  }
  _find (target) {
    let currentNode = this.head
    if (!target) {
      return null
    }
    while (!Object.is(currentNode, null) && currentNode.element !== target) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  insert (newElemnt, target) {
    let newNode = new Node(newElemnt)
    let currentNode = this._find(target)
    if (!Object.is(currentNode, null)) {
      let afterNode = currentNode.next
      if (afterNode) {
        afterNode.previous = newNode
      }
      newNode.next = currentNode.next
      newNode.previous = currentNode
      currentNode.next = newNode
    }
    return this
  }
  remove (item) {
    let currentNode = this._find(item)
    if (!Object.is(currentNode, null) && !Object.is(currentNode.next, null)) {
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
      currentNode.next = null
      currentNode.previous = null
    }
    return this
  }
  toString () {
    let currentNode = this.head
    let result = []
    while (!Object.is(currentNode.next, null)) {
      result.push(currentNode.next.element)
      currentNode = currentNode.next
    }
    return `${result}`
  }
  toReverseString () {
    let tailNode = this.head
    while (!Object.is(tailNode.next, null)) {
      tailNode = tailNode.next
    }
    let result = []
    let currentNode = tailNode
    while (!Object.is(currentNode.previous, null)) {
      result.push(currentNode.element)
      currentNode = currentNode.previous
    }
    return `${result}`
  }
}
