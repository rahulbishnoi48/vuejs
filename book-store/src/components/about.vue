<template>
    <div id="about-us">
        <p> we are free mind people's and believe in providing a platorm for free to user so that 
        they can create their own stories blogs and share knowledge about their most loved books</p>
        <p>We enjoy to read your blogs and reviews about different books</p>
        <p>You can write to us by use using below button and we'll get back to :</p>
        <button v-on:click="formDisplay">Write to us</button>
        <div v-if="!submitted">
            <label>name:</label>
            <input type="text" v-model.lazy="writer.name" placeholder="Your full name" required />
            <label>Email:</label>
            <input type="text" v-model.lazy="writer.email" placeholder="your email id" required/>
            <label>query or comment:</label>
            <textarea v-model.lazy="writer.comment"  required></textarea>
            <button v-on:click.prevent="postComment">Submit</button>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            writer:{
                name:'',
                email:'',
                comment:'',
            },
            submitted:true,
        }
    },
    methods:{
        postComment:function(){
            this.$http.post("https://bookblogs-a9a81-default-rtdb.asia-southeast1.firebasedatabase.app/queries.json",this.writer).then(function(data){
                console.log(data);
                this.submitted=!this.submitted;
            })
        },
        formDisplay:function(){
            this.submitted=!this.submitted;
        }
    },


}
</script>
<style>
</style>
