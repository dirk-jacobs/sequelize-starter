<template>
  <div class="app-container">
    <Header />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    HelloWorld
  }
}
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .app-container {
    height: 100vh; /* for shorter content */
    display: flex;
    flex-direction: column;
  }
</style>
