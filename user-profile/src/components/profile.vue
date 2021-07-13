<template>
  <div id="profile">
    <label>Select a user</label>
    <div v-if="!search" >
      <select v-model="selectedUser">
        <option v-for="user in users" :key="user.id" >{{user.id}}</option>
      </select>
      <button v-on:click.prevent="searching">Search profile</button>
    </div>
   
    <div v-if="search" id="profile-preview">
      <h3>Profile Preview</h3>
      <p v-for="(value,property,index) in selectedUserData" :key="index">{{property}} : {{value}}</p>
      <button v-on:click="searchProfile">Search another Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  props:["users"]
  data(){
    return{
      users:{
      },
      search:false,
      selectedUser:'',
      selectedUserData:{

      }
    }
  },methods:{
    searching:function(){
      for(let user in this.users){
        
        if(user==this.selectedUser-1){
          
          this.selectedUserData=this.users[user];
          this.search=true;
        }
      }
    },
    searchProfile:function(){
      this.search=false;
    }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(data){
          return data.json();
      }).then(function(data){
          this.users= data;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
