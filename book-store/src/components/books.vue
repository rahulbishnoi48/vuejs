<template>
    <div id="books">
        <div id="blogs">
            <input type="text" v-model="search" placeholder="search for book"/>
            <div v-for="(book,index) in filterBooks" class="single-book" :key="index">
                <router-link v-bind:to="'/book/'+book.id"><h2>{{book.title}}</h2></router-link>
                <article>{{book.description}}</article>
            </div>
        </div>
    </div>
</template>
<script>
import searchContent from '../mixins/searchContent.js'

export default{
data(){
        return{
            books:[],
            search:'',
        }
    },
    methods:{

    },
    created(){
        this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books.json").then(function(data){
            return data.json();
        }).then(function(data){
            let booksArray=[];
            for(let key in data){
                data[key].id=key;
                booksArray.push(data[key]);
            }
            this.books=booksArray;
        })
    },
    mixins:[searchContent]
}
</script>
<style>
</style>
