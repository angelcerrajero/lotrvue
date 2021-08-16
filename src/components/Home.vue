<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
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
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
