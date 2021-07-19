<template>
  <div id="single-blog">
    <h2>{{book.title}}</h2>
    <article>{{book.description}}</article>
    <p>Author: {{book.author}}</p>
    <p>Genre: {{book.genre}}</p>
  </div>
</template>

<script>
export default {
  data (){
    return {
      id: this.$route.params.id,
      book:{

      }
    }
  },
  methods:{

  },
  created(){
      this.$http.get("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books/"+this.id+'.json').then(function(data){
          this.book = data.body
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>