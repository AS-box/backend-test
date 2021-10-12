<template>
  <div class="home">
    <Nav></Nav>
    <put-game></put-game>
    <game-lists></game-lists>
  </div>
</template>

<script>
// @ is an alias to /src
import GameLists from '@/components/GameLists.vue'
import Nav from '../components/nav.vue'
import PutGame from '../components/PutGame.vue'

export default {
  name: 'Home',
  components: {
    GameLists,
    Nav,
    PutGame
  }
}
</script>
