<template>
  <div class="app">
    <div class="header">
      <h1>Страница с постами</h1>
      <my-button @click="showDialog" class="flex_end margin_top margin_bottom"
        >Создать пост</my-button
      >
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" @fetchPosts="fetchPosts" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        this.posts = response.data;
        console.log(response);
      } catch (error) {
        alert('Ошибка: ', error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.header {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 5px;
}
</style>
