import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Route components
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login},
  { path: '/register', component: Register},
];

const router = new VueRouter({
  routes,
  base: document.querySelector('#root').getAttribute('data-path') || '/',
  mode: 'history'
});

new Vue({
  router,
  el: '#root',
  render: h => h(App)
});