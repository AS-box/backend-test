<template>
  <div class="hello">
    <button @click='get'>get</button>
    <form action="POST">
      <input type="text" name="name" id="name" placeholder="ゲームの名前" v-model="gameName">
      <button @click="submit" type="submit">submit</button>
    </form>
    <ul>
      <li v-for="game in games" :key="game">{{game.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      games: {},
      gameName: ''
    }
  },
  methods: {
    get () {
      this.$store.dispatch('testGetting').then(() => {
        this.games = this.$store.state.games
      })
    },
    // get () {
    //   this.$store.dispatch('testGetting').then((response) => {
    //     this.games = this.$store.state.games
    //   })
    // },
    submit () {

    }
  }
}
</script>
