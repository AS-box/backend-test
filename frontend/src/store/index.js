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
    async getGameLists (state) {
      const games = await axios.get('/list')
      this.commit('gamesSet', games.data)
    },
    async postGame (state, game) {
      await axios.post('/create', game).then(res => {
        window.location.href = '/'
      })
    }

  },
  modules: {
  }
})
