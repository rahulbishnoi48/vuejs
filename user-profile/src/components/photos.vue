<template>
  <div id="photos">

  </div>
</template>

<script>
export default {
  data(){
      return{
        userId:this.$route.params.id,
        userAlbums:{},
        albums:{
        },
        photos:{
        },
        userPhotos:{

        }
      }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/photos').then(function(data){
          return data.body;
      }).then(function(data){
          this.photos= data;
          console.log(this.photos);
      }),
      this.$http.get('https://jsonplaceholder.typicode.com/albums').then(function(data){
        return data.body;
      }).then(function(data){
        let albums=[];
        for(let album in data){
          if(this.userId.substring(1)==data[album].userId){
            albums.push(data[album]);
          }
        }
        this.userAlbums=albums;
        this.userAlbums
        
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
