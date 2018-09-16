import HashTable from '../HashTable.js'

describe('HashTable', () => {
  it('should create empty HashTable', () => {
    const hash = new HashTable()
    expect(hash.display().length).toBe(137)
    const newHash = new HashTable(10)
    expect(newHash.display().length).toBe(10)
  })
})
