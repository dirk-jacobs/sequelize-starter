import BannerSection from './banner-section.js';
import TestimonySection from './testimony-section.js';

const MainSection = {
  components: {
    BannerSection,
    TestimonySection
  },
  template: `
  <div class="main">
  <banner-section></banner-section>
  <testimony-section></testimony-section>
  </div>
  `
}

export default MainSection; 