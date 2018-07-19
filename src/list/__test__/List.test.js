/*
* @Author: Albert
* @Date:   2018-07-18 22:51:52
* @Last Modified by:   Albert
* @Last Modified time: 2018-07-19 20:15:59
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
  it('should remove node from list', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.remove(2)

    expect(list.toString()).toBe('1')
    expect(list.getLength()).toBe(1)
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
  it('should clear list', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.append(3)

    list.clear()

    expect(list.toString()).toBe('')
    expect(list.getLength()).toBe(0)
  })
  it('should test if list contains element ', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.append(3)

    expect(list.toString()).toBe('1,2,3')
    expect(list.contains(2)).toBe(true)
    expect(list.contains('2')).toBe(false)
  })
  it('should get element from list by position', () => {
    const list = new List()

    list.append('a')
    list.append('b')
    list.append('c')
    list.append('d')
    list.append('e')

    expect(list.toString()).toBe('a,b,c,d,e')

    list.front()
    expect(list.getElement()).toBe('a')
    list.next()
    expect(list.getElement()).toBe('b')
    list.moveTo(4)
    expect(list.getElement()).toBe('e')
    list.prev()
    expect(list.getElement()).toBe('d')
  })
})
