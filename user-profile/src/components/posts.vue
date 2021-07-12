<template>
  <div id="posts">
    <h1>All Posts</h1>
    <div v-for="post in posts" v-bind:key='post' v-bind:post='post' class="single-post" >
        <h2>{{post.title}}</h2>
        <article>{{post.content}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          posts:[],
          search:'',
      }
  },
  methods:{

  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
          return data.json();
      }).then(function(data){
          let postsArray=[];
          for(let key in data){
              data[key].id=key;
              postsArray.push(data[key]);
          }
          this.posts=postsArray;
          console.log(this.posts);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
