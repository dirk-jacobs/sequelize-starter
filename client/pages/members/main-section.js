const MainSection = {
  data: () => ({ message: 'Members Main' }),
  template: `
  <div class="main">
    <h1>{{message}}</h1>
    <!-- Bootstrap Card -->
    <div class="card">
      <div class="card-body">
        This is some text within a card body.
      </div>
    </div>
    <!-- Bootstrap Button -->
    <button type="button" class="btn btn-secondary" v-on:click="message += ' row'">Add</button>
  </div>
  `
}

export default MainSection; 