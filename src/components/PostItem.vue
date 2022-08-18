<template>
  <div class="post">
    <div>
      <div><strong>ID поста: </strong>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$router.push(`/postspage/${post.id}`)"
        class="margin_bottom"
        >Открыть</my-button
      >
      <my-button @click="$emit('remove', post)" class="margin_top"
        >Удалить</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 10px;
  border: 2px solid teal;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
  flex-direction: column;
}
</style>
