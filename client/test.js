const app = Vue.createApp({
  data: () => ({ message: 'Row' }),
  template: `
  <div>
    <h1>{{message}} your ship</h1>
    <button v-on:click="message += ' row'">Add</button>
  </div>
  `
}).mount('#app');

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