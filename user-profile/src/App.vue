<template>
  <div >
    <show-header></show-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import profile from './components/profile.vue';
// import photos from './components/photos.vue';
// import posts from './components/posts.vue';
import header from './components/header.vue';
export default {
  components: {
    'show-header':header,
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
body{
  margin:0;
  font-family: 'Nunito SemiBold';
}
</style>
