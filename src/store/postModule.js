import axios from 'axios';
import { setTimeout } from 'core-js';

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: true,
    selectedSort: '',
    searchQuery: '',
    page: 0,
    limit: 10,
    totalPages: 0,
    postId: 1,
    post: [],
    postTitle: '',
    postBody: '',
    dialogVisible: false,
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По содержимому' },
      { value: 'id', name: 'По ID поста' },
    ],
  }),

  getters: {
    sortedPosts(state) {
      let tempPosts = [...state.posts];
      if (state.selectedSort === '') {
        return state.posts;
      } else if (typeof state.posts[0][state.selectedSort] === 'string') {
        tempPosts.sort((post1, post2) => {
          return post1[state.selectedSort]?.localeCompare(
            post2[state.selectedSort]
          );
        });
        return tempPosts;
      } else {
        tempPosts.sort((post1, post2) => {
          return post1.id - post2.id;
        });
        return tempPosts;
      }
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setShowDialog(state, bool) {
      state.dialogVisible = bool;
    },
    setPost(state, post) {
      state.post = post;
    },
    setPostTitle(state, postTitle) {
      state.postTitle = postTitle;
    },
    setPostBody(state, postBody) {
      state.postBody = postBody;
    },
  },

  actions: {
    async fetchPosts({ state, commit }) {
      if (state.page === 0) {
        commit('setLoading', true);
        try {
          setTimeout(async () => {
            const response = await axios.get(
              'https://jsonplaceholder.typicode.com/posts',
              {
                params: {
                  _page: state.page,
                  _limit: state.limit,
                },
              }
            );
            commit(
              'setTotalPages',
              Math.ceil(response.headers['x-total-count'] / state.limit)
            );
            commit('setPosts', response.data);
            commit('setLoading', false);
          }, 500);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    },

    async fetchPost({ state, commit }, currentId) {
      commit('setLoading', true);
      setTimeout(async () => {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${currentId}`
          );
          commit('setPost', response.data);
          commit('setPostTitle', response.data.title);
          commit('setPostBody', response.data.body);
          console.log(response);
          commit('setLoading', false);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }, 500);
    },

    // async loadMorePosts({ state, commit }) {
    //   try {
    //     commit('setPage', state.page + 1);
    //     const response = await axios.get(
    //       'https://jsonplaceholder.typicode.com/posts',
    //       {
    //         params: {
    //           _page: state.page,
    //           _limit: state.limit,
    //         },
    //       }
    //     );
    //     commit(
    //       'setTotalPages',
    //       Math.ceil(response.headers['x-total-count'] / state.limit)
    //     );
    //     commit('setPosts', [...state.posts, ...response.data]);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //   }
    // },

    createPost({ state, commit }, post) {
      state.posts.push(post);
      commit('setShowDialog', false);
    },

    showDialog({ commit }) {
      commit('setShowDialog', true);
    },

    hideDialog({ commit }) {
      commit('setShowDialog', false);
    },

    removePost({ state, commit }, post) {
      commit(
        'setPosts',
        state.posts.filter((p) => p.id !== post.id)
      );
    },
  },

  namespaced: true,
};
