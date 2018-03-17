import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import store from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0};
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
