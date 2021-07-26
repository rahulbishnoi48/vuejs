<template>
 <div id="blogs">
            <search-area @searchFieldChanged="changeField($event)"  @searchContentChanged="changeSearchContent($event)"></search-area>
            <router-link v-bind:to="`/blogs`"><button >search blogs</button></router-link>
            <br>
            <br>
            <label>If you want to add a blog please click here:</label><router-link v-bind:to="`/addblog`"><button >Add a blog</button></router-link>
            <br>
            <br>
            <div v-for="(blog,index) in filteredBlogs" class="single-blog" :key="index">
                <router-link v-bind:to="'/blog/'+blog.id"><h2>{{blog.title}}</h2></router-link>
                <article>{{blog.content}}</article>
            </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Books } from '@/interface/book-blogs';
import search from '@/components/search.vue';
import {getBlogs} from '@/service/getRequests';
import {arrayForm} from '@/utils/arrayFormation';
import {filterBooks} from '@/utils/searchContent';

export default Vue.extend({
  components: {
    'search-area':search
  },
  data(){
    return {
    blogs: [] as Books,
    searchCriteria:['author',"title","genre"] as string[],
    searchField :'' as string,
    search:'',
    change:'',
    }
  },
  methods:{
    async getAllBlogs(){
      let rawData=await getBlogs();
      this.blogs = arrayForm(rawData);
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
        books:this.blogs,
      };
      console.log(this.blogs)
      return filterBooks(data);
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
    this.getAllBlogs();
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
    filteredBlogs():Books{
      return this.filterationOnSearch();
    }
  }
});
</script>
<style scoped>
h2{
  color:black
}
</style>