<template>
  <div class="gameList mt-4">
    <ul class="columns">
      <li v-for="game in games" :key="game" class="column">
        <div class="card">
          <div class="card-header is-size-4">{{game.name}}</div>
          <div class="card-content">{{game.discription}}</div>
        </div>
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
.card{
   align-items: stretch;
   height: 100%;
  .card-header{
    justify-content: center;
    box-shadow:none;
    background: cornflowerblue;
    color: #fff;
    display: flex;
  }
}
</style>
