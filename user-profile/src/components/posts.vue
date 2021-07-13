<template>
  <div id="posts">
    <h1>All Posts</h1>
    <div v-for="(post,index) in userPosts" :key='index'  >
        <h2>{{post.title}}</h2>
        <article>{{post.body}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          userId: this.$route.params.id,
          userPosts:[],
      }
  },
  methods:{

  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
          return data.body;
      }).then(function(data){
          let postsArray=[];
          for(let key in data){
            if(data[key].userId==this.userId.substring(1)){
                postsArray.push(data[key]);
            }
          }
          this.userPosts=postsArray;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
