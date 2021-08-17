<template>
<!-- <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }"> -->
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/requests">Requests</router-link>
      </div>
        <!-- <router-link to="home">Characters and Quotes</router-link>
        <router-link to="/requests">Requests</router-link> -->
      </a-menu>
    <!-- </a-layout-header> -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/requests">Requests</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
