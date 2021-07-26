<template>
  <div id ="add-book">
    <h2>Add a new book</h2>
    <form v-if="!submitted">
        <label>book title</label>
        <input type ="text" v-model.lazy="book.title" required/>
        <label>book content</label>
        <textarea v-model.lazy="book.content"></textarea>
        <label>Author:</label>
        <input v-model="book.author"/>
        <label>Genre:</label>
        <input v-model="book.genre"/>

        <button v-on:click.prevent="post">Add a book</button>
    </form>
    <div v-if="submitted">
      <p>Thanks for adding a book</p>
      <p>below is the preview of the book you added </p>
      <button v-on:click="addNew">Add another book</button>
    </div>
    <div id="preview">
        <h3>Preview book</h3>
        <p>book title: </p>
        <p>{{book.title}}</p>
        <p>book author: </p>
        <p>{{book.author}}</p>
        <p>book genre: </p>
        <p>{{book.genre}}</p>
        <p>book content:</p>
        <p>{{book.description}}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import {Book} from '@/interface/book-blogs'
export default Vue.extend({
  data (){
      return{
        book:{} as Book,
        submitted : false,
      }
  },
  methods:{
       post(){
            this.$http.post("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/books.json",this.book);
            this.submitted=true;
      },
      addNew(){
          this.submitted=false;
      }
  }
})
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