<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click='post'>click me</button>
  </div>
</template>

<script>
import Methods from '@/api/methods'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Yout Vue.js App'
    }
  },
  methods: {
    async post () {
      const response = await Methods.testPosting()
      console.log(response)
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
