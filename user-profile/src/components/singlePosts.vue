<template>
  <div id="single-post">
    <h1>{{post.title}}</h1>
    <article>{{post.content}}</article>
  </div>
</template>

<script>
export default {
  data(){
      return{
          id:this.$route.params.id,
          post:{
          }
      }
  },methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
          return data.json();
      }).then(function(data){
        
          this.post=data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#single-post{
    max-width: 960px;
    margin:0 auto;
}
</style>
