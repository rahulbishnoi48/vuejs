<template>
  <div id="photos">
    <div v-for="(photo,index) in userPhotos" :key='index'>
      <img :src="photo.url">
    </div>
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
      }),
      this.$http.get('https://jsonplaceholder.typicode.com/albums').then(function(data){
        return data.body;
      }).then(function(data){
        let albums=[];
        for(let album in data){
          if(this.userId==data[album].userId){
            albums.push(data[album]);
          }
        }
        this.userAlbums=albums;
        return albums;
      }).then(function(albums){
        let photos=[];
        for(let album in albums){
          for(let photo in this.photos){
            if(albums[album].id== this.photos[photo].albumId){
              photos.push(this.photos[photo]);
            }
          }
        }
        this.userPhotos=photos;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
