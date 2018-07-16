/*
* @Author: deacyn
* @Date:   2018-07-16 21:43:03
* @Last Modified by:   deacyn
* @Last Modified time: 2018-07-16 22:33:51
*/
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sum(1, 2, 3)).toBe(6)
})
