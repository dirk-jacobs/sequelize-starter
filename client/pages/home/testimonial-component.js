const TestimonialComponent = {
    props: ['testimonial'],
    template: `<div class="testimonial">
        <div>{{testimonial.avatar}}</div>
        <div>{{testimonial.content}}</div>
    </div>`
}

export default TestimonialComponent; 