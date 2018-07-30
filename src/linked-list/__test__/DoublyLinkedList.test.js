import DoublyLinkedList from '../DoublyLinkedList'

describe('DoublyLinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new DoublyLinkedList()
    expect(linkedList.toString()).toBe('')
    expect(linkedList.toReverseString()).toBe('')
  })

  it('should insert node to linked list', () => {
    const linkedList = new DoublyLinkedList()

    expect(linkedList.head.toString()).toBe('head')

    linkedList.insert('a', 'head')
    linkedList.insert('b', 'a')
    linkedList.insert('c', 'a')
    linkedList.insert('d', 'b')
    linkedList.insert('g', 'z')
    linkedList.insert('p')

    expect(linkedList.toString()).toBe('a,c,b,d')
    expect(linkedList.toReverseString()).toBe('d,b,c,a')
  })
  it('should remove node to linked list', () => {
    const linkedList = new DoublyLinkedList()

    expect(linkedList.head.toString()).toBe('head')

    linkedList.insert('a', 'head')
    linkedList.insert('b', 'a')
    linkedList.insert('c', 'a')
    linkedList.insert('d', 'b')

    expect(linkedList.toString()).toBe('a,c,b,d')
    expect(linkedList.toReverseString()).toBe('d,b,c,a')
    linkedList.remove('a')
    linkedList.remove('g')

    expect(linkedList.toString()).toBe('c,b,d')
    expect(linkedList.toReverseString()).toBe('d,b,c')
  })
})
