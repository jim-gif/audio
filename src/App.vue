<template>
  <heade />
  <router-view />
</template>

<script>
import heade from './components/header.vue'

export default {
  name: 'App',
  components: {
    heade
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:rgba(94,97,89,0.2);
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>


