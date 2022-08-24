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
      { value: 'titleUp', name: 'По названию \u2191' },
      { value: 'titleDown', name: 'По названию \u2193' },
      { value: 'bodyUp', name: 'По содержимому \u2191' },
      { value: 'bodyDown', name: 'По содержимому \u2193' },
      { value: 'idUp', name: 'По ID поста \u2191' },
      { value: 'idDown', name: 'По ID поста \u2193' },
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
