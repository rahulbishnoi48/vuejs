<template>
  <div id="photos">
  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/albums/'+this.profileId).then(function(data){
          return data.json();
      }).then(function(data){
          this.details= data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
