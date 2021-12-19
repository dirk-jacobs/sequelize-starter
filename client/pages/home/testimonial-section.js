import TestimonialComponent from './testimonial-component.js';

const TestimonialSection = {
  components: {
    TestimonialComponent
  },
  template: `
  <div class="testimonial-section">
  <testimonial-component :testimonial="testimonials[0]" />
  <testimonial-component :testimonial="testimonials[1]" />
  <testimonial-component :testimonial="testimonials[2]" />
  </div>
  `,
  data (){
    return {
      testimonials: [
       {avatar: 'student1.png', content: 'Testimonial-1'},
       {avatar: 'student1.png', content: 'Testimonial-2'},
       {avatar: 'student1.png', content: 'Testimonial-3'},
      ]
    }
  }
}

export default TestimonialSection; 