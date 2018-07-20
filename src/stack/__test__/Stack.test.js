import Stack from '../Stack.js'

describe('Stack', () => {
  it('should create empty Stack', () => {
    const stack = new Stack()
    expect(stack.toString()).toBe('')
    expect(stack.isEmpty()).toBeTruthy()
    expect(stack.getLength()).toBe(0)
  })
  it('should push data to Stack', () => {
    const stack = new Stack()

    stack.push('a')
    stack.push('b')

    expect(stack.toString()).toBe('a,b')
    expect(stack.isEmpty()).toBeFalsy()
    expect(stack.getLength()).toBe(2)
  })

  it('should peak data from Stack', () => {
    const stack = new Stack()

    stack.push('a')
    stack.push('b')

    expect(stack.toString()).toBe('a,b')
    expect(stack.peak()).toBe('b')
    expect(stack.peak()).toBe('b')
  })

  it('should pop data from Stack', () => {
    const stack = new Stack()

    stack.push('a')
    stack.push('b')

    expect(stack.toString()).toBe('a,b')
    expect(stack.pop()).toBe('b')
    expect(stack.pop()).toBe('a')
    expect(stack.pop()).toBeNull()
    expect(stack.isEmpty()).toBeTruthy()
  })
})
