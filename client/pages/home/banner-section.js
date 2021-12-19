const BannerSection = {
  data: () => ({ message: 'Banner' }),
  template: `
  <div class="banner-section">
    <h1>{{message}}</h1>
    <button v-on:click="message += ' llama'">Add</button>
  </div>
  `
}

export default BannerSection; 