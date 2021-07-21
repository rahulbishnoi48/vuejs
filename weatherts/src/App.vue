<script lang="ts">

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

<script>

export default {
  name: 'App',
  data (){
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
    fetchWeather(e){
      if(e.key=='Enter'){
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
        .then(res=>{
          return res.json();
        }).then(this.setResults);
      }
    },
    setResults(results){
      this.weather=results;
    },
    dateBuilder(){
      const d = new Date();
      return `${d}`;
    },
    currentButton(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async(position)=>{
          // latitude=await position.coords.latitude;
          // longitude=await position.coords.longitude;
          fetch(`${this.url_base}weather?lat=${Math.floor(position.coords.latitude)}&lon=${position.coords.longitude}&appid=${this.api_key}`)
          .then(res=>{
            return res.json();
          }).then(this.setCurrent);
        });
      }else{
        console.log('your browser dont support this');
      }
      
    },
    setCurrent(results){
      this.current=results;
    }
  }
}
</script>

<style>

</style>
