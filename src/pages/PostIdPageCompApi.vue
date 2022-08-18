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
          @click="$router.push(`/postspage/${Number($route.params.id) - 1}`)"
          >Предыдущий пост</my-button
        >
        <my-button
          @click="$router.push(`/postspage/${Number($route.params.id) + 1}`)"
          >Следующий пост</my-button
        >
      </div>
    </div>
    <div class="page-loading" v-else>Загрузка...</div>
  </div>
</template>

<script>
import { usePosts } from '@/hooks/usePosts';
import { useFetchPost } from '@/hooks/useFetchPost';

export default {
  beforeRouteUpdate(to, from, next) {
    this.currentId = to.params.id;
    this.fetchPost();
    next();
  },

  setup(props) {
    const { isPostLoading } = usePosts();
    const { currentId, postTitle, postBody, fetchPost } =
      useFetchPost(isPostLoading);

    return {
      isPostLoading,
      currentId,
      postTitle,
      postBody,
      fetchPost,
    };
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
.btns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  cursor: pointer;
}
</style>
