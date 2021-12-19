
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
}).mount('#page2');


/* app.component('hello', {
  props: ['to'],
  // "<h1>Hello, WORLD</h1>"
  template: '<h1>Hello, {{toUpper}}</h1>',
  setup: function(props) {
    return { toUpper: props.to.toUpperCase() };
  }
});
 */
export default app;