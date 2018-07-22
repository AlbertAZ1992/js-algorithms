import { LinkedListNode as Node } from './LinkedListNode.js'

export default class LinkedList {
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
      currentNode.next = newNode
    }
    return this
  }
  findPrevious (item) {
    let currentNode = this.head
    while (!Object.is(currentNode.next, null) && (currentNode.next.element !== item)) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  remove (item) {
    let previousNode = this.findPrevious(item)
    if (!Object.is(previousNode.next, null)) {
      let needDeleteNode = previousNode.next
      previousNode.next = previousNode.next.next
      delete needDeleteNode
    }
    return this
  }
  toString () {
    let currentNode = this.head
    let result = []
    while (!Object.is(currentNode.next, null)){
      result.push(currentNode.next.element)
      currentNode = currentNode.next
    }
    return `${result}`
  }

}
