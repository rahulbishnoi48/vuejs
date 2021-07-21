<template>
  <div>
    <show-header></show-header>
    <router-view></router-view>
    <show-footer></show-footer>
  </div>
</template>

<script>

import header from './components/header.vue';
import footer from './components/footer.vue';

export default {
  components:{
    'show-header' : header,
    'show-footer' : footer,
  },
  data () {
    return{

    }
  },
  methods:{

  }
}
</script>

<style >
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
