import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase'
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
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCpykOZYRx5zcFSPjDvJHUFLUQORxvSBno',
      authDomain: 'meetup-3c382.firebaseapp.com',
      databaseURL: 'https://meetup-3c382.firebaseio.com',
      projectId: 'meetup-3c382',
      storageBucket: 'meetup-3c382.appspot.com'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.$store.dispatch('autoSignIn', user)
    })
}
})
