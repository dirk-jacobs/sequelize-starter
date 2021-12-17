import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'

import App from './App.vue'
import Home from './pages/home/Home.vue'
import Members from './pages/members/Members.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/members', component: Members },
    { path: '/bar', component: Home },
  ],
})

const app = createApp(App)
app.use(router)
window.vm = app.mount('#app')
