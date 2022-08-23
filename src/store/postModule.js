export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: true,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    dialogVisible: false,
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По содержимому' },
      { value: 'id', name: 'По ID поста' },
    ],
  }),

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

  namespaced: true,
};
