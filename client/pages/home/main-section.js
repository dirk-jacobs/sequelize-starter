import BannerSection from './banner-section.js';
import TestimonialSection from './testimonial-section.js';

const MainSection = {
  components: {
    BannerSection,
    TestimonialSection
  },
  template: `
  <div class="main">
  <banner-section></banner-section>
  <testimonial-section></testimonial-section>
  </div>
  `
}

export default MainSection; 