<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <post-item
      class="post"
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <div v-else class="empty_list">
    <h2>Список постов пуст</h2>
    <my-button @click="$emit('fetchPosts')" class="flex_end margin_top"
      >Получить посты</my-button
    >
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
h2,
h3 {
  text-align: center;
  margin-top: 10px;
}

.empty_list {
  display: flex;
  flex-direction: column;
}
</style>
