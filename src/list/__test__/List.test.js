/*
* @Author: Albert
* @Date:   2018-07-18 22:51:52
* @Last Modified by:   Albert
* @Last Modified time: 2018-07-18 23:03:28
*/
import List from '../List.js'

describe('List', () => {
  it('should create empty list', () => {
    const list = new List()
    expect(list.toString()).toBe('')
  })
  it('should append node to list', () => {
    const list = new List()

    list.append(1)
    list.append(2)

    expect(list.toString()).toBe('1,2')
    expect(list.getLength()).toBe(2)
  })
  it('should insert node to list', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.append(3)

    list.insert(4, 2)

    expect(list.toString()).toBe('1,2,4,3')
    expect(list.getLength()).toBe(4)
  })
  it('should insert node before somthing to list', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.append(3)

    list.insertBefore(4, 2)

    expect(list.toString()).toBe('1,4,2,3')

    list.insertBefore(5, 1)

    expect(list.toString()).toBe('5,1,4,2,3')
    expect(list.getLength()).toBe(5)
  })
})
