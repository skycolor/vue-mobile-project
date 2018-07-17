const state = require('./state')
const mutations = require('./mutations')
const getters = require('./getters')
const actions = require('./actions')

module.exports = {
  state: state ,
  mutations: mutations.default ,
  getters: getters ,
  actions: actions.default
}
