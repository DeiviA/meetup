import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

import * as types from './mutations-type'

Vue.use(Vuex);

export const state = {
  counter: 0,
  user: null,
  isLoggedIn: false,
  meetups: {}
};

export const getters = {
  getCounter (state) {
    return state.counter
  },
  getUserLoggedIn (state) {
    return state.isLoggedIn
  },
  getUser (state) {
    return state.user
  },
  getMeetups (state) {
    return state.meetups
  }
};

export const actions = {
  signUserUp ({commit}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        const newUser = {
          id: user.uid,
          email: payload.email,
          name: user.displayName,
          photo: user.photoURL
        };
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
          email: payload.email,
          name: user.displayName,
          photo: user.photoURL
        };
        commit(types.LOG_IN);
        commit(types.SET_USER, newUser);
      })
      .catch(error => {
        console.log('signUserUp', error)
      })
  },
  updateProfileInfo ({commit}, payload) {
    const user = firebase.auth().currentUser
    user.updateProfile({
      displayName: payload.name,
      photoURL: payload.photo
    }).then(() => {
      console.log('success from updateProfileInfo');
    }).catch((error) => {
      console.log('updateProfileInfo', error);
    });
  },
  autoSignIn ({commit}, payload) {
    const newUser = {
      id: payload.uid,
      email: payload.email,
      name: payload.displayName,
      photo: payload.photoURL
    };
    console.log('autoSignIn', payload);
    commit(types.LOG_IN);
    commit(types.SET_USER, newUser);
  },
  logOut ({commit}) {
    firebase.auth().signOut()
    commit(types.LOG_OUT)
  },
  createNewMeetup ({commit}, payload) {
    const newMeetup ={
      title: payload.title,
      description: payload.description,
      location: payload.location,
      organizerId: payload.organizerId,
      participantsId: payload.participantsId,
      date: payload.date
    }
    let imageUrl
    let key
    firebase.database().ref('meetups').push(newMeetup)
      .then(data => {
        key = data.key
        return key
      })
      .then(key => {
        const format = payload.photo.name.substring(payload.photo.name.lastIndexOf('.'));
        return firebase.storage().ref('meetups/' + key + format).put(payload.photo)
      })
      .then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0]
        return firebase.database().ref('meetups').child(key).update({ imageUrl, key })
      })
      .then(() => {
        // commit()
      })
      .catch(error => {
        console.log(error)
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
    state.user = null
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
