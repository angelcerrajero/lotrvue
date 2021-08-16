<template>
  <div class="home">
    <HomeApp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeApp from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    HomeApp
  }
}
</script>
