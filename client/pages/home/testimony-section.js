import TestimonyComponent from './testimony-component.js';

const testimony1 = {
  avatar:'student-1.png',
  content:'content 1, ....'
}

const testimony2 = {
  avatar:'student-2.png',
  content:'content 2, ....'
}

const testimony3 = {
  avatar:'student-3.png',
  content:'content 3, ....'
}

const TestimonySection = {
  components: {
    TestimonyComponent
  },
  template: `
  <div class="testimony-section">
  <TestimonyComponent  :testimony="testimonies[0]" />
  <TestimonyComponent  :testimony="testimonies[1]" />
  <TestimonyComponent  :testimony="testimonies[2]" />
  </div>
  `,
  data (){
    return {
      testimonies: [
       {avatar: 'student1.png', content: 'Testimonial-1'},
       {avatar: 'student1.png', content: 'Testimonial-2'},
       {avatar: 'student1.png', content: 'Testimonial-3'},
      ]
    }
  }
}

export default TestimonySection; 