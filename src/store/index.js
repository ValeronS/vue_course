import { createStore } from 'vuex';

export default createStore({
  state: {
    likes: 0,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
    incrimentLikes(state) {
      state.likes += 1;
    },
    dicrimentLikes(state) {
      state.likes -= 1;
    },
  },
  actions: {},
});
