const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            // titles: ['The Final Empire', 'something'],
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {
                    title: 'name of wind',
                    author: 'patrick rothfuss',
                    img: './assets/1.jpg',
                    isFav: true
                },
                {
                    title: 'the way of kings',
                    author: 'Brandon Sanderson',
                    img: './assets/2.jpg',
                    isFav: false
                },
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    img: 'assets/3.jpg',
                    isFav: true
                },
            ],
            url: 'https://google.com'
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
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
            console.log("click")
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app')