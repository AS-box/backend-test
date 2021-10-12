<template>
  <div class="hello">
    <form action="POST">
      <input type="text" name="name" id="name" placeholder="ゲームの名前" v-model="gameName">
      <button @click="submit" type="submit">submit</button>
    </form>
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
  methods: {
    submit () {

    }
  }
}
</script>
