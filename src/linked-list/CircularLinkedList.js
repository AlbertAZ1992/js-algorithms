import { LinkedListNode as Node } from './LinkedListNode.js'

export default class CircluarLinkedList {
  constructor() {
    this.head = new Node('head')
    this.head.next = this.head
  }
  find(target) {
    let currentNode = this.head
    while (currentNode.element !== target && (currentNode.next.element !== 'head')) {
      currentNode = currentNode.next
    }
    if (currentNode.element != target) {
      return null;
    }
    return currentNode
  }
  insert(newElemnt, target) {
    let newNode = new Node(newElemnt)
    let currentNode = this.find(item)
    if (!Object.is(currentNode, null)) {
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
    return this
  }
  findPrevious(item) {
    let currentNode = this.head
    while (!Object.is(currentNode.next, null) && (currentNode.next.element !== item) && (currentNode.next.element !== 'head')) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  remove(item) {
    let previousNode = this.findPrevious(item)
    if (!Object.is(previousNode.next, null)) {
      previousNode.next = previousNode.next.next
    }
    return this
  }
  toString() {
    let currentNode = this.head
    let result = []
    while (!Object.is(currentNode.next, null) && (currentNode.next.element !== 'head')) {
      result.push(currentNode.next.element)
      currentNode = currentNode.next
    }
    return `${result}`
  }

}
