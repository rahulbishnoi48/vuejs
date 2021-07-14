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
      this.$http.get('https://jsonplaceholder.typicode.com/users/'+this.selectedUser).then(function(data){
          return data.body;
      }).then(function(data){
        let userData={};
        for(const key in data){
          if(key==='address'){
            const addressObj=data[key];
            let addressStr='';
            for(const fields in addressObj){
              if(fields!=='geo'){
                addressStr+=`${fields} - ${addressObj[fields]}, `;
              }
            }
            userData['address']=addressStr;
          }else if(key==='company'){
            const companyName=data[key].name;
            userData['company']=companyName;
          }else{
            userData[key]=data[key];
          }
        }
        this.selectedUserData=userData;
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
