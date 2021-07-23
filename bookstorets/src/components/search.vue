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
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
