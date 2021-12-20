import TestimonialComponent from './testimonial-component.js';

const TestimonialSection = {
  components: {
    TestimonialComponent
  },
  template: `
  <div class="testimonial-section">
    <template v-for="testimonial in testimonials">
      <testimonial-component :testimonial="testimonial" />
    </template>
  </div>
  `,
  data (){
    return {
      testimonials: [
       {avatar: 'student1.png', 
        content: 'Testimonial-1.....'},
       {avatar: 'student2.png', 
        content: 'Testimonial-2.....'},
       {avatar: 'student3.png', 
        content: 'Testimonial-3.....'},
      ]
    }
  }
}

export default TestimonialSection; 