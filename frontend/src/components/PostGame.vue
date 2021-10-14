<template>
  <div class="post_game">
    <form action="/create" method="post">
      <input class="input mt-4" type="text" name="name" id="name" placeholder="ゲームの名前" v-model="gameName">
      <textarea class="textarea mt-4" name="discription" id="discription" cols="30" rows="10" v-model="gameDiscription" placeholder="ゲームの説明"></textarea>
      <button class="button is-info mt-4" @click="submitGame" type="button">submit</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.post_game{
  form{
    margin: auto;
    max-width: 600px;
  }
}
</style>
<script>
export default {
  name: 'GameLists',
  data () {
    return {
      games: {},
      gameName: '',
      gameDiscription: ''
    }
  },
  methods: {
    submitGame () {
      if (this.gameName && this.gameDiscription) {
        this.$store.dispatch('postGame', {
          name: this.gameName,
          discription: this.gameDiscription
        })
      } else {
        alert('データを入力してください')
      }
    }
  }
}
</script>
