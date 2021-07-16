import books from './components/books.vue';
import blogs from './components/blogs.vue';
import home from './components/home.vue';
import singleBook from './components/singleBook.vue';

import singleBlog from './components/singleBlog.vue';

import addBook from './components/addBook.vue';

import addBlog from './components/addBlog.vue';

import terms from'./components/terms.vue';

import about from './components/about.vue';

export default[
    {
        path : '/', component : home
    },
    {
        path : '/books', component : books
    },
    {
        path : '/blogs', component : blogs
    },
    {
        path: '/addblog',component : addBlog
    },
    {
        path: '/addbook',component : addBook
    },
    {
        path : '/book/:id',component : singleBook
    },
    {
        path : '/blog/:id',component : singleBlog
    },
    {
        path: '/terms',component: terms
    },
    {
        path : '/about',component:about
    }
];