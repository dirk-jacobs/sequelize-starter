<template>
  <Header />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Footer />
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
