<template>
    <div>
        <label >search based on :</label>
        <select v-model="searchField" @change="changeField" >
            <option v-for="(field,index) in searchCriteria" :key="index" >{{field}}</option>
        </select>
        <input type="text" v-model="search" placeholder="search" @input="changeSearchContent"/>
    </div>
</template>
<script>
    export default{
        props:[],
        data(){
            return{
                searchCriteria:["author","title","genre"],
                search:'',
                searchField:'',
            }
        },
        methods:{
            changeSearchContent(){
                this.$emit('searchContentChanged',this.search)
            },
            changeField(){
                this.$emit('searchFieldChanged',this.searchField)
            }
        }
    }
</script>
<style>
</style>
