<template>
  <div class="home">
    <Request/>
  </div>
</template>

<script>
// @ is an alias to /src
import Request from '@/components/Requests.vue'

export default {
  name: 'Home',
  components: {
    Request
  }
}
</script>
