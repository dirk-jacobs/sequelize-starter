const TestimonyComponent = {
    props: ['testimony'],
    template: `<div class="testimony">
        <div>{{testimony.avatar}}</div>
        <div>{{testimony.content}}</div>
    </div>`
}

export default TestimonyComponent; 