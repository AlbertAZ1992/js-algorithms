import { DoublyLinkedListNode as Node } from './LinkedListNode.js'

export default class DoublyLinkedList {
  constructor () {
    this.head = new Node('head')
  }
  find (target) {
    let currentNode = this.head
    while (currentNode.element !== target && !Object.is(currentNode, null)) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  insert (newElemnt, target) {
    let newNode = new Node(newElemnt)
    let currentNode = this.find(item)
    if (!Object.is(currentNode, null)) {
      newNode.next = currentNode.next
      newNode.previous = currentNode
      currentNode.next = newNode
    }
    return this
  }
  remove (item) {
    let currentNode = this.find(item)
    if (!Object.is(currentNode.next, null)) {
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
      delete currentNode
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
    while(!Object(tailNode.next, null)) {
      tailNode = tailNode.next
    }
    let result = []
    while (!Object(tailNode.previous, null)) {
      result.push(currentNode.element)
      currentNode = currentNode.previous
    }
    return `${result}`
  }
}
