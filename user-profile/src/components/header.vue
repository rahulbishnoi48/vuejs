<template>
    <div>
        <nav>
            <ul>
                <li><router-link :to="`/${selectedUser}`" exact>profile</router-link></li> 
                <li><router-link :to="`/posts/${selectedUser}`" exact>posts</router-link></li>
                <li><router-link :to="`/photos/${selectedUser}`" exact>photos</router-link></li>
            </ul>
        </nav>
            <label>Select a user</label>    
            <select v-model="selectedUser">
                <option v-for="user in users" :key="user.id" >{{user.id}}</option>
            </select>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                users:{
                },
                selectedUser:'',
            }
        },
        methods:{
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

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>