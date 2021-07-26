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
<script>
import search from './search.vue';
import searchContent from '../mixins/searchContent.js'
import arrayForm from '../shared/componentFunctions.js'
export default{
   
    data(){
        return{
            books:[],
            search:'',
            searchField:'',
            searchCriteria:["author","title","genre"]
        }
    },
    components:{
        'search-area':search
    },
    methods:{
        
    },
    created(){
        this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books.json").then(function(data){
            return data.json();
        }).then(function(data){
            this.books=arrayForm(data);
        })
    },
    mixins:[searchContent]
}
</script>
<style>
</style>
