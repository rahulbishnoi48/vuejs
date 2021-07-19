<template>
  <div id="home">
    <h1>BookBlogs.com</h1>
    <p>A clean website to post your blogs and  description of your favourite books. Here, you can read and write about any topic you want without any boundation of genre . You can also read about books and if you like to add your favourite information you can do that too here. This website is all about being you.</p>
    <router-link v-bind:to="'/books'"><button >Read a blog</button></router-link>
    <router-link v-bind:to="`/blogs`"><button >Read a book</button></router-link>
    <router-link v-bind:to="`/addblog`"><button >Add a blog</button></router-link>
    <router-link v-bind:to="`/addbook`"><button >Add a book</button></router-link>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>