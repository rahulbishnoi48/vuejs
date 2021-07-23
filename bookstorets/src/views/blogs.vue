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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {
  },
});
</script>
