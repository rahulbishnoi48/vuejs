<template>
  <div id="app">
      <div class="date">{{dateBuilder()}}</div>
      <label>current location temperature</label>
      <button v-on:click="currentButton">locate</button>
      <div id="current-weather" v-if="typeof current.main != 'undefined'">
        <div id="currentlocation">
            <div class ="location">{{current.name}}</div>
        </div>
        <div id="current-data">
          <div id="current-temp">{{current.main.temp}} celsius </div>
          <div id="surroundings">{{current.weather[0].main}}</div>
        </div>
      </div>
      <br>
      <br>
      <p>Search for any other lcoation temperature</p>

      <div id= "searchbox">
        <input type="text" class="location" placeholder="search" v-model="query"  v-on:keypress="fetchWeather"/>
      </div>
      <div class="weather-data" v-if="typeof weather.main != 'undefined'" >
        <div id="location-data">
          <div id="location">{{weather.name}}</div>
        </div>
        <div id="weather-data">
          <div id="temperature">{{ weather.main.temp }} celsius</div>
          <div id="surroundings">{{weather.weather[0].main}}</div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      api_key:'5712d4a15fd6d5211c5eb330193095b0',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather :{},
      current:{},
      countries:'',
      states:'',
      cities:'',
    }
  },
  methods:{
    
  }
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
