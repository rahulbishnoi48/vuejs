<template>
  <div id="posts">
    <h1>All Posts</h1>
    <div v-for="(post,index) in userPosts"  :key='index' class="single-post" >
        <router-link :to="`/posts/single/${post.id}`" exact ><h2>{{post.title}}</h2></router-link>
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
          const postsArray=[];
          for(const key in data){
            if(data[key].userId==this.userId){
                postsArray.push(data[key]);
            }
          }
          this.userPosts=postsArray;
          console.log(this.userPosts);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.single-blog{
    padding:20px;
    margin: 20px 0;
    box-sizing : border-box;
    background: #eee
}

h2{
  color: black;
}
</style>
