import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

export default createStore({
  state: {
    games: {}
  },
  mutations: {
    gamesSet (state, games) {
      this.state.games = games
    }
  },
  actions: {
    async testGetting (state) {
      const games = await axios.get('/test')
      this.commit('gamesSet', games.data)
    }
  },
  modules: {
  }
})
