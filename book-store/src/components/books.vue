<template>
    <div id="books">
            <label >search based on :</label>
            <select v-model="searchField">
                <option v-for="(field,index) in searchCriteria" :key="index">{{field}}</option>
            </select>
            <input type="text" v-model="search" placeholder="search for book"/>
            <div v-for="(book,index) in filterBooks" class="single-book" :key="index">
                <router-link v-bind:to="'/book/'+book.id"><h2>{{book.title}}</h2></router-link>
                <article>{{book.description}}</article>
            </div>
    </div>
</template>
<script>
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
    methods:{

    },
    created(){
        this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books.json").then(function(data){
            console.log(data);
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
