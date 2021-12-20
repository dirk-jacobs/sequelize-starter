const subTitle = 'Banner Message'; // Just to demonstrate how to use 'external' variables
const message = "Hello world";

const BannerSection = {
  data () { 
    this.message = message;
    return {
      title: 'Banner'
    }
  },
  created () {
    this.SUBTITLE = subTitle;
  },
  template: `
  <div class="banner-section">
    <h1>{{title}}</h1>
    <h2>{{SUBTITLE}}</h2>
    <p>{{message}}</p>
    <button v-on:click="title += ' llama'">Add</button>
  </div>
  `
}

export default BannerSection; 