import { LinkedListNode as Node } from './LinkedListNode.js'

export default class LinkedList {
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
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
    return this
  }
  _findPrevious (item) {
    let currentNode = this.head
    while (!Object.is(currentNode.next, null) && (currentNode.next.element !== item)) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  remove (item) {
    let previousNode = this._findPrevious(item)
    if (!Object.is(previousNode.next, null)) {
      previousNode.next = previousNode.next.next
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
}
