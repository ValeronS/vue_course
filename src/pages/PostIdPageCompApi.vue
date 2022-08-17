<template>
  <div class="post-page">
    <div v-if="!isPostLoading">
      <h2>Страница поста ID # {{ $route.params.id }}</h2>
      <div class="post__el">
        <h3>Название</h3>
        <div class="post__title">{{ postTitle }}</div>
      </div>

      <div class="post__el">
        <h3>Содержание</h3>
        <div class="post__body">{{ postBody }}</div>
      </div>
    </div>
    <div class="page-loading" v-else>Загрузка...</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      currentId: this.$route.params.id,
    };
  },

  methods: {
    ...mapActions({
      fetchPost: 'post/fetchPost',
    }),
  },

  mounted() {
    this.fetchPost(this.currentId);
  },

  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      postId: (state) => state.post.postId,
      post: (state) => state.post.post,
      postTitle: (state) => state.post.postTitle,
      postBody: (state) => state.post.postBody,
      isPostLoading: (state) => state.post.isPostLoading,
    }),
  },
};
</script>

<style>
.post-page {
  margin-top: 33%;
}
.post__el {
  background-color: azure;
  border-radius: 5px;
  margin-top: 25px;
  padding: 15px;
}
.post__title {
  text-align: center;
  margin-top: 10px;
}
.post__body {
  text-align: justify;
  margin-top: 10px;
}
h3 {
  margin-top: 0;
}
.page-loading {
  text-align: center;
  margin-top: 33vh;
}
</style>
