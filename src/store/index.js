import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: null
  },
  mutations: {
    setUserinfo(state, data) {
      state.userinfo = data
    }
  },
  actions: {
    setUserinfoSync(context, data) {
      context.commit('setUserinfo', data)
    }
  },
  modules: {
  }
})
