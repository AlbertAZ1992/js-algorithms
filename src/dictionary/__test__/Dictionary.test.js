import Dictionary from '../Dictionary.js'

describe('Dictionary', () => {
  it('should create empty Dictionary', () => {
    const dict = new Dictionary()
    expect(dict.display()).toEqual([])
  })
  it('should set data to Dictionary', () => {
    const dict = new Dictionary()

    dict.set('a', 1)
    dict.set('b', 2)

    expect(dict.display()).toEqual(['a -> 1', 'b -> 2'])
    expect(dict.count()).toBe(2)
  })
  it('should get data from Dictionary', () => {
    const dict = new Dictionary()

    dict.set('a', 1)
    dict.set('b', 2)

    expect(dict.get('a')).toEqual(1)
    expect(dict.get('b')).toEqual(2)
  })
  it('should check whether key is in Dictionary', () => {
    const dict = new Dictionary()

    dict.set('a', 1)
    dict.set('b', 2)

    expect(dict.has('a')).toBeTruthy()
    expect(dict.get('d')).toBeFalsy()
  })
  it('should remove data from Dictionary', () => {
    const dict = new Dictionary()

    dict.set('a', 1)
    dict.set('b', 2)
    dict.set('c', 3)

    expect(dict.display()).toEqual(['a -> 1', 'b -> 2', 'c -> 3'])
    expect(dict.count()).toBe(3)

    dict.remove('b')
    expect(dict.display()).toEqual(['a -> 1', 'c -> 3'])
    expect(dict.count()).toBe(2)

    dict.remove('a')
    expect(dict.display()).toEqual(['c -> 3'])
    expect(dict.count()).toBe(1)
  })
  it('should clear Dictionary', () => {
    const dict = new Dictionary()

    dict.set('a', 1)
    dict.set('b', 2)
    dict.set('c', 3)

    expect(dict.display()).toEqual(['a -> 1', 'b -> 2', 'c -> 3'])
    expect(dict.count()).toBe(3)

    dict.clear()
    expect(dict.display()).toEqual([])
    expect(dict.count()).toBe(0)
  })
  it('should show all values of Dictionary', () => {
    const dict = new Dictionary()

    dict.set('a', 1)
    dict.set('b', 2)
    dict.set('c', 3)

    expect(dict.values()).toEqual([1, 2, 3])
  })
})
