<template>
  <div class="app-container">
    <Header />
    <Home msg="Hello Vue 3.0 + Vite" />
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home
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
