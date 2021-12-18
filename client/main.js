
const TodoItem = {
  template: `<li>This is a todo</li>`
}

const app = Vue.createApp({
  components: {
    TodoItem // Register a new component
  },
  data: () => ({ message: 'Row' }),
  template: `
  <div>
    <todo-item></todo-item>
    <h1>{{message}} your ship</h1>
    <button v-on:click="message += ' row'">Add</button>
  </div>
  `
}).mount('#app');


export default app;