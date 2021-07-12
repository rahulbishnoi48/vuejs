import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';
import routes from './routes.js';


Vue.use(VueResource);
Vue.use(VueRouter);


const router= new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app');
