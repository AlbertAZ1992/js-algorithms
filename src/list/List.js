/*
* @Author: Albert
* @Date:   2018-07-18 22:19:35
* @Last Modified by:   Albert
* @Last Modified time: 2018-07-19 20:26:06
*/
export default class List {
  constructor () {
    this.listSize = 0
    this.currentPos = 0
    this.dataStore = []
  }
  /**
   * @param  {*} element append element
   */
  append (element) {
    this.dataStore[this.listSize++] = element
  }
  /**
   * remove element, if success, return true, else return false
   * @param  {*} element
   * @return {Boolean}
   */
  remove (element) {
    let foundAt = this._find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)
      --this.listSize
      return true
    }
    return false
  }
  /**
   * find element index
   * @param  {*} element
   * @return {Number} index
   */
  _find (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i
      }
    }
    return -1
  }
  getLength () {
    return this.listSize
  }
  toString (callback) {
    return callback ? callback(this.dataStore) : `${this.dataStore}`
  }
  /**
   * insert element after node to list
   * @param  {*} element
   * @param  {*} after   after which node
   * @return {Boolean}
   */
  insert (element, after) {
    let insertPos = this._find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize
      return true
    }
    return false
  }
  /**
   * insert element before node to list
   * @param  {*} element
   * @param  {*} before
   * @return {Boolean}
   */
  insertBefore (element, before) {
    let insertPos = this._find(before)
    if (insertPos > -1) {
      ++this.listSize
      for (let i = this.listSize - 1; i > insertPos; i--) {
        this.dataStore[i] = this.dataStore[i - 1]
      }
      this.dataStore[insertPos] = element
      return true
    }
    return false
  }
  /**
   * clear list
   */
  clear () {
    delete this.dataStore
    this.dataStore = []
    this.listSize = 0
    this.currentPos = 0
  }
  /**
   * check if list contains element
   * @param  {*} element
   * @return {Boolean}
   */
  contains (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true
      }
    }
    return false
  }
  /**
   * move current position to the first
   */
  front () {
    this.currentPos = 0
  }
  /**
   * move current position to the end
   */
  end () {
    this.currentPos = this.listSize - 1
  }
  /**
   * move current position to previous one
   */
  prev () {
    if (this.currentPos > 0) {
      --this.currentPos
    }
  }
  /**
   * move current position to next one
   */
  next () {
    if (this.currentPos < this.listSize - 1) {
      ++this.currentPos
    }
  }
  /**
   * get current position
   * @return {Number} current position
   */
  getCurrentPosition () {
    return this.currentPos
  }
  /**
   * move current position to index
   */
  moveTo (pos) {
    if (pos > 0 && pos < this.listSize) {
      this.currentPos = pos
    }
  }
  /**
   * get element at current position
   * @return {*} element
   */
  getElement () {
    return this.dataStore[this.currentPos]
  }
}
