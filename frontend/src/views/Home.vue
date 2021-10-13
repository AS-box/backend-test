<template>
  <div class="home">
    <Nav></Nav>
    <post-game></post-game>
    <game-lists></game-lists>
  </div>
</template>

<script>
// @ is an alias to /src
import GameLists from '@/components/GameLists.vue'
import Nav from '../components/nav.vue'
import PostGame from '../components/PostGame.vue'

export default {
  name: 'Home',
  components: {
    GameLists,
    Nav,
    PostGame
  }
}
</script>
