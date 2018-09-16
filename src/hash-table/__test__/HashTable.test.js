import HashTable from '../HashTable.js'

describe('HashTable', () => {
  it('should create empty HashTable', () => {
    const hash = new HashTable()
    expect(hash.size()).toBe(137)
    expect(hash.display()).toEqual([])
  })
  // it('should add data to HashTable', () => {
  //   const hash = new HashTable()
  //   expect(hash.display().length).toBe(137)
  //   const data = ['just', 'for', 'a', 'hashtable', 'test']
  //   data.forEach(str => {
  //     hash.set(str, str)
  //   })

  // })
})
