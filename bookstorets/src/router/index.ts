import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home.vue'
import books from '../components/books.vue'
import blogs from '../views/blogs.vue'
import terms from  '../views/terms.vue'
import singleBlog from '../components/single-blog.vue'

import singleBook from '../components/single-book.vue'

import addBook from '../components/add-book.vue'
import addBlog from '../components/add-blog.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: books,
  },{
    path :'/blogs',
    name: 'Blogs',
    component : blogs,
  },
  {
    path :'/addblog',
    name : 'AddBlog',
    component : addBlog,
  },
  {
    path : '/addbook',
    name : 'AddBook',
    component : addBook,
  },
  {
    path : '/blog/:id',
    name :'SingleBlog',
    component : singleBlog
  },
  {
    path : '/book/:id',
    name : 'SingleBook',
    component : singleBook
  },
  {
    path : '/terms',
    name : 'Terms',
    component : terms,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
