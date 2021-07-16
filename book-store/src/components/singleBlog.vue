<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <p>Genre: {{blog.genre}}</p>
  </div>
</template>

<script>
export default {
  data (){
    return {
      id: this.$route.params.id,
      blog:{

      }
    }
  },
  methods:{

  },
  created(){
      this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/"+this.id+'.json').then(function(data){
          this.blog = data.body;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>