<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <p>Genre: {{blog.genre}}</p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {getSingleBlog} from '@/service/getRequests'
export default Vue.extend({
    data(){
        return {
            id:this.$route.params.id,
            blog:{
            }
        }
    },
    methods:{
        async getBlogData(){
            this.blog = await getSingleBlog(this.id);
            console.log(this.blog);
        }
    },
    created(){
        this.getBlogData();
    }
})
</script>
<style>
</style>