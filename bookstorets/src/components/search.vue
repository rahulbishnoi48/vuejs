<template>
    <div>
        <label >search based on :</label>
        <select v-model="searchField" @change="changeField" >
            <option v-for="(field,index) in searchCriteria" :key="index" >{{field}}</option>
        </select>
        <input type="text" v-model="search" placeholder="search" @input="changeSearchContent"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
  },
  data(){
    return{
      searchCriteria:['author','title','genre'],
      search:'',
      searchField:'',
    }
  },
  methods : {
    changeSearchContent(){
      this.$emit('searchContentChanged',this.search)
    },
    changeField(){
      this.$emit('searchFieldChanged',this.searchField);
    }

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
