// sessionStorage存储页面信息专属key抬头
const DBPREFIX = 'hf_app'

// 方法对象
class Storage {
  constructor () {
    this.storage = window.sessionStorage
    this.prefix = DBPREFIX
    // 程序内部定义的存储key
    this.staticName = {
        USER_TOKEN: 'user_token'
    }
  }
  // 存储  
  set (key, value, fn) {
    try {
      value = JSON.stringify(value)
    } catch (e) {

    }
    this.storage.setItem(this.prefix + key, value)
    fn && fn()
  }
  // 获取  
  get (key, fn) {
    if (!key) {
      throw new Error('没有找到key。')
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。')
    }
    var value = this.storage.getItem(this.prefix + key)
    if (value !== null) {
      try {
        value = JSON.parse(value)
      } catch (e) {

      }
    }
    if (value !== null) {
      try {
        value = JSON.parse(value)
      } catch (e) {

      }
    }
    return value
  }
  // 移除  
  remove (key) {
    this.storage.removeItem(this.prefix + key)
  }
}

export default new Storage()
