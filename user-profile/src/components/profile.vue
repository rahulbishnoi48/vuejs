<template>
  <div id="profile">
    <ul>
      <li v-for="(value , property ,index) in details" :key="index">
          {{index}}. {{property}} : {{value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      profileId:this.$route.params.profileid,
      details:{
      }
    }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/users/'+this.profileId).then(function(data){
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
