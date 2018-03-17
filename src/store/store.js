import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
  counter: 0
};

export const getters = {
  getCounter (state) {
    return state.counter
  }
}

export default new Vuex.Store({
  state,
  getters
})
