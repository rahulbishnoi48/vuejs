<template>
  <div id="add-book">
    <h2>Add a new book description</h2>
    <form v-if="!submitted">
        <label>Book title</label>
        <input type ="text" v-model.lazy="book.title" required/>
        <label>Book description</label>
        <textarea v-model.lazy="book.description"></textarea>
        <label>Author:</label>
        <input v-model="book.author"/>
        <label>Genre:</label>
        <input v-model="book.genre"/>
        <button v-on:click.prevent="post">Add a book</button>
    </form>
    <div v-if="submitted">
      <p>Thanks for adding a book</p>
      <p>below is the preview of the description book of the you just added </p>
      <button v-on:click="addNew">Add another book</button>
    </div>
    <div id="preview">
        <h3>Preview book</h3>
        <p>Book title: </p>
        <p>{{book.title}}</p>
        <p>Book author: </p>
        <p>{{book.author}}</p>
        <p>Book genre: </p>
        <p>{{book.genre}}</p>
        <p>Book description:</p>
        <p>{{book.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          book:{
              title:'',
              description:'',
              author:'',
              genre:''
          },
          submitted : false,
      }
  },
  methods:{
    post:function(){
          this.$http.post("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books.json",this.book).then(function(data){
              console.log(data);
            this.submitted=true;
        });
    },
    addNew:function(){
        this.submitted=false;
    }
  }
}
</script>

<style scoped>
h3{
    margin-top: 10px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
#add-book{
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
#add-book *{
    box-sizing: border-box;
}
</style>