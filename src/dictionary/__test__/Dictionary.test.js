import Dictionary from '../Dictionary.js'

describe('Dictionary', () => {
  it('should create empty Dictionary', () => {
    const dict = new Dictionary()
    expect(dict.display()).toEqual([])
  })
  it('should add data to Dictionary', () => {
    const dict = new Dictionary()

    dict.add('a', 1)
    dict.add('b', 2)

    expect(dict.display()).toEqual(['a -> 1', 'b -> 2'])
  })
})
