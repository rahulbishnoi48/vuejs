<template>
 <div id="books">
            <search-area @searchFieldChanged="changeField($event)"  @searchContentChanged="changeSearchContent($event)"></search-area>
            <router-link v-bind:to="`/blogs`"><button >search blogs</button></router-link>
            <br>
            <br>
            <label>If you want to add a book please click here:</label><router-link v-bind:to="`/addbook`"><button >Add a book</button></router-link>
            <br>
            <br>
            <div v-for="(book,index) in filteredBooks" class="single-book" :key="index">
                <router-link v-bind:to="'/book/'+book.id"><h2>{{book.title}}</h2></router-link>
                <article>{{book.description}}</article>
            </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Books } from '@/interface/book-blogs';
import search from '@/components/search.vue';
import {getBooks} from '@/service/getRequests';
import {arrayForm} from '@/utils/arrayFormation';
import {filterBooks} from '@/utils/searchContent';

export default Vue.extend({
  name: 'Home',
  components: {
    'search-area':search
  },
  data(){
    return {
    books: [] as Books|string,
    searchCriteria:['author',"title","genre"] as string[],
    searchField :'' as string,
    search:'',
    change:'',
    filteredBooks:[] as Books|string
    }
  },
  methods:{
    async getAllBooks(){
      let rawData=await getBooks();
      this.books = arrayForm(rawData);
      console.log(this.books);
      // this.books=await getBooks();
      // console.log(this.books);
    },
    changeField(event:string){
      this.searchField=event;
    },
    changeSearchContent(event:string){
      this.search=event
    },
    filterationOnSearch(){
      const data={
        searchField:this.searchField,
        search:this.search,
        books:this.books,
      };
      this.books= filterBooks(data);
    }
    // filter():Books|string{
    //   const data={
    //     searchField:this.searchField,
    //     search:this.search,
    //     books:this.books,
    //   };
    //   let booksData= filterBooks(data);
    //   // console.log(booksData);
    //   return filterBooks(data);
    // }
  },
  created(){
    this.getAllBooks();
    // this.filteredBooks=this.filter();

  },
  // beforeMount(){
  //   // const data={
  //   //     searchField:this.searchField,
  //   //     search:this.search,
  //   //     books:this.books,
  //   //   };
  //   //   this.books= filterBooks(data);
  //   this.filterationOnSearch();
  // },
  computed:{
    filteredBooks(){
      this.filterationOnSearch();
    }
  }
});
</script>
<style scoped>
h2{
  color:black
}
</style>