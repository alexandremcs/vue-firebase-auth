import { createStore } from 'vuex'
// Router to get reference to the current routes 
import router from '@/router'
// Auth from firebase to access app authentication
import { auth } from '@/firebase'
// Firebase functions to control the authentication
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
 } from "firebase/auth";

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
    // Action to register a new user on firebase    
    async register ({commit}, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email em uso")
            break
          case 'auth/invalid-email':
            alert("Email inválido")
            break
          case 'auth/operation-not-allowed':
            alert("Operação não permitida")
            break
          case 'auth/weak-password':
            alert("Senha fraca")
            break
          default:
            alert("Algo de errado aconteceu")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    // Action to login with a registered user of firebase
    async login ({commit}, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert ("Usuário não encontrado")
            break
          case 'auth/wrong-password':
            alert("Senha errada")
            break
          default:
            alert("Algo de errado aconteceu")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    // Action to user logout and CLEAR_USER mutation
    async logout ({commit}, details) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    // Redirects the user to the correct page if its refresh the page
    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  }
})
