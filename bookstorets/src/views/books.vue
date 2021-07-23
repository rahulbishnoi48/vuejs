<template>
 <div id="books">
            <search-area @searchFieldChanged="searchField = $event"  @searchContentChanged="search = $event"></search-area>
            <router-link v-bind:to="`/blogs`"><button >search blogs</button></router-link>
            <br>
            <br>
            <label>If you want to add a book please click here:</label><router-link v-bind:to="`/addbook`"><button >Add a book</button></router-link>
            <br>
            <br>
            <div v-for="(book,index) in filterBooks" class="single-book" :key="index">
                <router-link v-bind:to="'/book/'+book.id"><h2>{{book.title}}</h2></router-link>
                <article>{{book.description}}</article>
            </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Books } from '@/interface/book-blogs';
import search from './components/search.vue';
import {getBooks} from '@/service/getRequests';
export default Vue.extend({
  name: 'Home',
  components: {
    'search-area':search
  },
  data(){
    return {
    books: [] as Books,
    searchCriteria:['author',"title","genre"] as string[],
    searchField :'' as string,
    search:'',
    }
  },
  methods:{
    async getAllBooks(){
      this.books=await getBooks();
      console.log(this.books);
    }
  },
  created(){
    this.getAllBooks();

  },
});
</script>
