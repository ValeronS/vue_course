<template>
  <div class="post-page">
    <div v-if="!isPostLoading">
      <h2>Страница поста ID # {{ $route.params.id }}</h2>
      <div class="post__el">
        <h3>Название</h3>
        <div class="post__title">
          {{ postTitle }}
        </div>
      </div>

      <div class="post__el">
        <h3>Содержание</h3>
        <div class="post__body">{{ postBody }}</div>
      </div>

      <div class="btns">
        <my-button
          v-if="currentId > 1"
          @click="$router.push(`/postspage/${--currentId}`)"
          >Предыдущий пост</my-button
        >
        <my-button
          v-if="currentId < postsLength"
          @click="$router.push(`/postspage/${++currentId}`)"
          >Следующий пост</my-button
        >
      </div>
    </div>
    <div class="page-loading" v-else>Загрузка...</div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { usePosts } from '@/hooks/usePosts';
import { useFetchPost } from '@/hooks/useFetchPost';
// import { mapState } from 'vuex';

export default {
  beforeRouteUpdate(to, from, next) {
    this.currentId = to.params.id;
    this.fetchPost();
    next();
  },

  setup(props) {
    const store = useStore();
    const { isPostLoading, fetchPosts } = usePosts();
    const { currentId, postTitle, postBody, fetchPost } =
      useFetchPost(isPostLoading);
    const postsLength = store.state.post.posts.length;

    return {
      isPostLoading,
      currentId,
      postTitle,
      postBody,
      fetchPost,
      fetchPosts,
      postsLength,
    };
  },
  // computed: {
  //   ...mapState({
  //     posts: (state) => state.post.posts,
  //   }),
  // },
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
.btns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  cursor: pointer;
}
</style>
