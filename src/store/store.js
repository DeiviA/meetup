import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

import * as types from './mutations-type'

Vue.use(Vuex);

export const state = {
  counter: 0,
  user: null,
  isLoggedIn: false
};

export const getters = {
  getCounter (state) {
    return state.counter
  },
  getUserLoggedIn (state) {
    return state.isLoggedIn
  }
};

export const actions = {
  signUserUp ({commit}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        user.updateProfile({
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
          console.log('good');
        }).catch(function(error) {
          console.log('wrong');
        });

        const newUser = {
          id: user.uid,
          name: '',
          surname: ''
        };
        console.log('user =', user);
        commit(types.LOG_IN);
        commit(types.SET_USER, newUser);
      })
      .catch(error => {
        console.log('signUserIn', error)
      })
  },
  signUserIn ({commit}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        const newUser = {
          id: user.uid,
          name: '',
          surname: ''
        };
        console.log('user =', user);
        commit(types.LOG_IN);
        commit(types.SET_USER, newUser);
      })
      .catch(error => {
        console.log('signUserUp', error)
      })
  }
};

export const mutations = {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.LOG_IN] (state) {
    state.isLoggedIn = true
  },
  [types.LOG_OUT] (state) {
    state.isLoggedIn = false
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
