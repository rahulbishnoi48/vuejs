<template>
    <div id="blogs">
        <search-block @searchFieldChanged="searchField = $event"  @searchContentChanged="search = $event"></search-block>
        <router-link v-bind:to="`/books`"><button >search Books</button></router-link>
        <br>
        <br>
        <label>If you want to add a new blog please click here:</label><router-link v-bind:to="`/addblog`"><button >Add a blog</button></router-link>
        <br>
        <br>
        <div v-for="(blog,index) in filterBlogs" class="single-blog" :key="index">
            <router-link v-bind:to="'/blog/'+blog.id"><h2>{{blog.title}}</h2></router-link>
            <article>{{blog.content}}</article>
        </div>
    </div>
</template>
<script>
import searchContent from '../mixins/searchContent.js'
import arrayForm from '../shared/componentFunctions.js'
import search from './search.vue';
export default{
    data(){
        return{
            blogs:[],
            search:'',
            searchField:'',
            searchCriteria:["author","title","genre"]
        }
    },
    components:{
        'search-block':search
    },
    methods:{

    },
    created(){
        this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json").then(function(data){
            return data.json();
        }).then(function(data){
            this.blogs=arrayForm(data);
        })
    },
    mixins:[searchContent]
}
</script>
<style>
h2 {
    color: #000;
}
</style>