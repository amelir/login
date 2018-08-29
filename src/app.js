import Vue from 'vue';
import VueRouter from 'vue-router';
import AppView from './AppView.vue';
import 'components/global.scss';

// Route components
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AppView, meta: { title: 'Login' }, children: [
    {
      path: '', component: Login, name: 'account_login'
    },
    {
      path: 'register', component: Register, name: 'account_register', meta: { title: 'Register' }
    }
  ]}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: '#root',
  template: '<router-view></router-view>'
});