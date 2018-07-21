import Queue from '../Queue.js'

describe('Queue', () => {
  it('should create empty Queue', () => {
    const queue = new Queue()
    expect(queue.toString()).toBe('')
    expect(queue.isEmpty()).toBeTruthy()
    expect(queue.getLength()).toBe(0)
  })
  it('should enqueue data to Queue', () => {
    const queue = new Queue()

    queue.enqueue('a')
    queue.enqueue('b')

    expect(queue.toString()).toBe('a,b')
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.getLength()).toBe(2)
  })
  it('should dequeue data to Queue', () => {
    const queue = new Queue()

    queue.enqueue('a')
    queue.enqueue('b')

    expect(queue.toString()).toBe('a,b')

    expect(queue.dequeue()).toBe('a')
    expect(queue.dequeue()).toBe('b')
    expect(queue.dequeue()).toBeNull()
    expect(queue.isEmpty()).toBeTruthy()
  })
  it('should get front data to Queue', () => {
    const queue = new Queue()

    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')

    expect(queue.toString()).toBe('a,b,c')

    expect(queue.front()).toBe('a')
    queue.dequeue()
    expect(queue.front()).toBe('b')
  })
  it('should get back data to Queue', () => {
    const queue = new Queue()

    queue.enqueue('a')
    queue.enqueue('b')

    expect(queue.toString()).toBe('a,b')

    expect(queue.back()).toBe('b')
    queue.enqueue('c')
    expect(queue.back()).toBe('c')
  })
})
