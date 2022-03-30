const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            // titles: ['The Final Empire', 'something'],
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            // console.log('you clicked me')
            // this.title = 'Words of Randiance'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

app.mount('#app')