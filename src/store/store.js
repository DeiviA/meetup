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
    console.log('autoSignIn');
    commit(types.LOG_IN);
    commit(types.SET_USER, newUser);
  },
  logOut ({commit}) {
    firebase.auth().signOut()
    commit(types.LOG_OUT)
  },
  registerOnMeetup ({commit, state}, payload) {
    const {id, name, photo} = state.user
    firebase.database().ref('meetups').child(payload.key + '/participants').push({id, name, photo})
  },
  unregisterOnMeetup ({commit}, payload) {
    firebase.database().ref('meetups').child(payload.key + '/participants/' + payload.userKey).remove()
  },
  createNewMeetup ({commit}, payload) {
    const newMeetup ={
      title: payload.title,
      description: payload.description,
      location: payload.location,
      organizer: payload.organizer,
      participants: payload.participants,
      date: payload.date
    }
    let imageUrl
    let key
    return firebase.database().ref('meetups').push(newMeetup)
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
        commit(types.ADD_MEETUP, {...newMeetup, imageUrl, key})
      })
      .catch(error => {
        console.log(error)
      })
  },
  getAllMeetups ({commit}) {
    return firebase.database().ref('meetups').once('value')
      .then(res => {
        const data = res.val()
        commit(types.SET_MEETUPS, data)
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
  },
  [types.SET_MEETUPS] (state, payload) {
    state.meetups = payload
  },
  [types.ADD_MEETUP] (state, payload) {
    state.meetups = { ...state.meetups, payload}
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
