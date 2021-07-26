<template>
    <div id="single-book">
        <h2>{{book.title}}</h2>
        <article>{{book.content}}</article>
        <p>Author: {{book.author}}</p>
        <p>Genre: {{book.genre}}</p>
    </div>
</template>
<script>
import {getSingleBook} from '@/service/getRequests'

export default{
    data(){
        return {
            id:this.$route.params.id,
            book:{

            }
        }
    },
    methods:{
        async getBlogData(){
            this.book = await getSingleBook(this.id);
            // console.log(this.book);
        }
    },
    created(){
        this.getBlogData();
    }
}
</script>
<style>
</style>