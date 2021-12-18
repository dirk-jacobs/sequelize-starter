
import Header from '../../components/header.js';

const page = Vue.createApp({
  components: {
    Header
  },
  data: () => ({ message: 'Row' }),
  template: `
  <div>
    <Header></Header>
    <h1>{{message}} your ship</h1>
    <button v-on:click="message += ' row'">Add</button>
  </div>
  `
}).mount('#home');


export default page;