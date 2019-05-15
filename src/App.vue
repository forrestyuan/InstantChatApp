<template>
  <div id="app">
    <router-view/>
    <tab-bar v-show="$store.state.isLoadTabBar"/>
  </div>
</template>
<script>
export default {
  name:'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
