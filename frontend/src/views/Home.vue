<template>
  <div class="home">
    <Nav></Nav>
    <game-lists></game-lists>
  </div>
</template>

<script>
// @ is an alias to /src
import GameLists from '@/components/GameLists.vue'
import Nav from '../components/nav.vue'

export default {
  name: 'Home',
  components: {
    GameLists,
    Nav
  }
}
</script>
