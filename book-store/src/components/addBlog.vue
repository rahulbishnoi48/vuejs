<template>
  <div id ="add-blog">
    <h2>Add a new blog</h2>
    <form v-if="!submitted">
        <label>Blog title</label>
        <input type ="text" v-model.lazy="blog.title" required/>
        <label>Blog content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <label>Author:</label>
        <input v-model="blog.author"/>
        <label>Genre:</label>
        <input v-model="blog.genre"/>

        <button v-on:click.prevent="post">Add a blog</button>
    </form>
    <div v-if="submitted">
      <p>Thanks for adding a blog</p>
      <p>below is the preview of the blog you added </p>
      <button v-on:click="addNew">Add another blog</button>
    </div>
    <div id="preview">
        <h3>Preview blog</h3>
        <p>Blog title: </p>
        <p>{{blog.title}}</p>
        <p>Blog author: </p>
        <p>{{blog.author}}</p>
        <p>Blog genre: </p>
        <p>{{blog.genre}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data (){
      return{
        blog:{
            title:'',
            content:'',
            author:'',
            genre:'',
        },
        submitted : false,
      }
  },
  methods:{
      post:function(){
          this.$http.post("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json",this.blog).then(function(data){
              console.log(data);
              this.submitted=true;
          })
      },
      addNew:function(){
          this.submitted=false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    margin-top: 10px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#add-blog *{
    box-sizing: border-box;
}
</style>