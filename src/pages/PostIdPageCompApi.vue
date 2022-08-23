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
          class="btn"
          >Предыдущий пост</my-button
        >
        <my-button
          v-if="currentId < postsLength"
          @click="$router.push(`/postspage/${++currentId}`)"
          class="btn"
          >Следующий пост</my-button
        >
      </div>
    </div>
    <div class="page-loading" v-else>Загрузка...</div>
  </div>
</template>

<script>
import { useFetchPost } from '@/hooks/useFetchPost';

export default {
  beforeRouteUpdate(to, from, next) {
    this.currentId = to.params.id;
    this.fetchPost();
    next();
  },

  setup(props) {
    const {
      isPostLoading,
      currentId,
      postsLength,
      postTitle,
      postBody,
      fetchPost,
    } = useFetchPost();

    return {
      postsLength,
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
  margin-top: 10vh;
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
}
.btn {
  cursor: pointer;
}
</style>
