<template>
    <div id="blogs">
        <input type="text" v-model="search" placeholder="search for blog"/>
        <div v-for="(blog,index) in filterBlogs" class="single-blog" :key="index">
            <router-link v-bind:to="'/blog/'+blog.id"><h2>{{blog.title}}</h2></router-link>
            <article>{{blog.content}}</article>
        </div>
    </div>
</template>
<script>
import searchContent from '../mixins/searchContent.js'
export default{
    data(){
        return{
            blogs:[],
            search:'',
        }
    },
    methods:{

    },
    created(){
        this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json").then(function(data){
            return data.json();
        }).then(function(data){
            let blogsArray=[];
            for(let key in data){
                data[key].id=key;
                blogsArray.push(data[key]);
            }
            this.blogs=blogsArray;
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