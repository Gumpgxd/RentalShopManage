import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    cartCount: 0,
  },
  mutations: {
    saveUserName(state, payload) {
      state.userName = payload;
    },
    saveCartCount(state, payload) {
      state.cartCount = payload;
    },

  },
  getters: {

  },
  actions: {},
  modules: {}
})
