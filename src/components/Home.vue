<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px', marginTop: '64px' }">
        <h3>Characters</h3>
        <div :style="{marginTop: '16px'}">
          <Characters @characterSelection="characterSelection" />
        </div>
        <h3>Quotes</h3>
        <div :style="{marginTop: '16px'}">
          <Quotes
            v-if="character"
            :characterQuotes="character"
          />
        </div>
      </div>
      {{logActions}}
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Metiora Frontend Challenge by Angel Cerrajero
    </a-layout-footer>
  </a-layout>
</template>
<script>
// import { onMounted } from 'vue';
import { mapActions, mapState } from 'vuex';
import Characters from './Characters.vue'
import Quotes from './Quotes.vue'

export default {
  data: () => ({
    character: undefined
  }),
  components: {
    Characters,
    Quotes
  },
  methods: {
    ...mapActions(['getCharacters', 'getQuotes']),
    characterSelection (val) {
      this.character = val ? this.quotes.filter(q => q.character === val) : undefined
    }
  },
  computed: {
    ...mapState(['quotes', 'logActions']),
  }
  ,
  mounted () {
    this.getCharacters();
    this.getQuotes()
  }
}
</script>

<style>
</style>
