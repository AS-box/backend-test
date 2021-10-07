<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click='get'>get</button>
    <button @click='post'>click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Yout Vue.js App'
    }
  },
  methods: {
    post () {
      const word = { text: 'Scceess!' }
      this.$store.dispatch('testPosting', word).then((response) => {
        console.log(response)
      })
    },
    get () {
      this.$store.dispatch('testGetting').then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
