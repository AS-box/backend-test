<template>
  <div class="gameList mt-4">
    <ul class="columns">
      <li v-for="game in games" :key="game" class="column">
        <h2>{{game.name}}</h2>
        <p>{{game.discription}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GameLists',
  data () {
    return {
      games: {},
      gameName: ''
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      this.$store.dispatch('getGameLists').then(() => {
        this.games = this.$store.state.games
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
