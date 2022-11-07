import { createStore } from 'vuex'

export default createStore({
  state: {
    // User null by default
    user: null
  },
  mutations: {
    // User that firebase gives
    SET_USER (state, user) {
      state.user = user
    },

    // Clear user when log out
    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    /*async register ({commit}, details) {
      //
    },
    async login ({commit}, details) {
      //
    },
    async logout ({commit}, details) {
      //
    }*/
  }
})
