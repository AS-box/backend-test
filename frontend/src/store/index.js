import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    testPosting (state, word) {
      return axios.post('/test', word)
    },
    testGetting (state) {
      return axios.get('/test2')
    }
  },
  modules: {
  }
})
