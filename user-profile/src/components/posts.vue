<template>
  <div id="posts">
    <h1>All Posts</h1>
    <div v-for="post in posts" :key='post'  >
        <h2>{{post.title}}</h2>
        <article>{{post.body}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          posts:[],
      }
  },
  methods:{

  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
          // console.log(data);
          return data.body;

      }).then(function(data){
          let postsArray=[];
          for(let key in data){
              data[key].id=key;
              postsArray.push(data[key]);
          }
          this.posts=postsArray;
          console.log(postsArray);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
