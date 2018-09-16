import HashTable from '../HashTable.js'

describe('HashTable', () => {
  it('should create empty HashTable', () => {
    const hash = new HashTable()
    expect(hash.size()).toBe(137)
    expect(hash.display()).toEqual([])
    const newHash = new HashTable(10)
    expect(newHash.size()).toBe(10)
    expect(newHash.display()).toEqual([])
  })
  it('should add data to HashTable', () => {
    const hash = new HashTable()
    expect(hash.size()).toBe(137)
    expect(hash.display()).toEqual([])
    const data = ['just', 'for', 'a', 'hashtable', 'test']
    data.forEach(str => {
      hash.set(str, str)
    })
    expect(hash.display()).toEqual([
      '37 -> test',
      '43 -> just',
      '53 -> for',
      '97 -> a',
      '118 -> hashtable'
    ])
  })
  it('should get data from HashTable', () => {
    const hash = new HashTable()
    expect(hash.size()).toBe(137)
    expect(hash.display()).toEqual([])
    const data = [
      {
        k: 'just', v: 'J'
      },
      {
        k: 'for', v: 'F'
      },
      {
        k: 'a', v: 'A'
      },
      {
        k: 'hashtable', v: 'H'
      },
      {
        k: 'test', v: 'T'
      }
    ]
    data.forEach(obj => {
      hash.set(obj.k, obj.v)
    })
    expect(hash.display()).toEqual([
      '37 -> T',
      '43 -> J',
      '53 -> F',
      '97 -> A',
      '118 -> H'
    ])
    expect(data.map(obj => {
      return hash.get(obj.k)
    })).toEqual(['J', 'F', 'A', 'H', 'T'])
  })
})
