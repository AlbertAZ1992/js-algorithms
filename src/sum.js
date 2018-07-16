/*
* @Author: deacyn
* @Date:   2018-07-16 21:42:43
* @Last Modified by:   deacyn
* @Last Modified time: 2018-07-16 22:33:42
*/
function sum (a, b, ...c) {
  return c ? (a + b) + ~~c : (a + b)
}
module.exports = sum
