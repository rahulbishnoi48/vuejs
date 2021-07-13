<template>
  <div id="profile">
    <div id="profile-preview">
      <h3>Profile Preview</h3>
      <p v-for="(value,property,index) in selectedUserData" :key="index">{{property}} : {{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      users:{
      },
      selectedUser:this.$route.params.id,
      selectedUserData:{
      }
    }
  },methods:{
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/users/'+this.selectedUser.substring(1)).then(function(data){
          return data.body;
      }).then(function(data){
          this.selectedUserData= data;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
