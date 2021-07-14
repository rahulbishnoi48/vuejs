<template>
    <div>
        <nav>
            <ul>
                <li><button v-on:click="aboutEvent">About us</button></li>
                <li><button v-on:click="helpEvent">Help</button></li>
                <li><button v-on:click="contactEvent">Contact Us</button></li>
            </ul>
            <div v-if="about">
                <p> It is an app for user profile details </p>
            </div>
            <div v-if="help">
                <p>Here profile is for user's profile and posts is to see the posts of user and photos is to see the user's photos </p>
            </div>
            <div v-if="contactUs">
                <p> you can contact us at someone@email.com </p>
            </div>

        </nav>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                about:false,
                contactUs:false,
                help:false
            }
        },
        methods:{
            aboutEvent:function(){
                this.about= !this.about;
            },
            contactEvent:function(){
                this.contactUs= !this.contactUs;
            },
            helpEvent:function(){
                this.help = !this.help;
            }
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