import LinkedList from '../LinkedList'

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
  })

  it('should insert node to linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.head.toString()).toBe('head')

    linkedList.insert('a', 'head')
    linkedList.insert('b', 'a')
    linkedList.insert('c', 'a')
    linkedList.insert('d', 'b')
    linkedList.insert('g', 'z')
    linkedList.insert('p')

    expect(linkedList.toString()).toBe('a,c,b,d')
  })
  it('should remove node to linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.head.toString()).toBe('head')

    linkedList.insert('a', 'head')
    linkedList.insert('b', 'a')
    linkedList.insert('c', 'a')
    linkedList.insert('d', 'b')

    expect(linkedList.toString()).toBe('a,c,b,d')

    linkedList.remove('a')
    linkedList.remove('g')

    expect(linkedList.toString()).toBe('c,b,d')
  })
})
