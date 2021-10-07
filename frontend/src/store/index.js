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
      console.log(word)
      return axios.post('/test', word)
    }
  },
  modules: {
  }
})
