<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-select v-model="selectedSort" :options="sortOptions" />
      <my-button @click="showDialog">Создать пост</my-button>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedPosts"
      @remove="removePost"
      @fetchPosts="fetchPosts"
      v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
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
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
        { value: 'id', name: 'По id поста' },
      ],
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
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
          );
          this.posts = response.data;
          console.log(response);
          this.isPostLoading = false;
        }, 700);
      } catch (error) {
        alert('Ошибка: ', error);
      } finally {
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      let tempPosts = [...this.posts];
      if (this.selectedSort === '') {
        console.log('SelectedSort is empty');
        return this.posts;
      } else if (typeof this.posts[0][this.selectedSort] === 'string') {
        tempPosts.sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(
            post2[this.selectedSort]
          );
        });
        console.log(tempPosts);
        console.log('Sorted by', this.selectedSort);
        return tempPosts;
      } else {
        tempPosts.sort((post1, post2) => {
          return post1.id - post2.id;
        });
        console.log(tempPosts);
        console.log('Sorted by', this.selectedSort);
        return tempPosts;
      }
    },
  },
  // watch: {
  //   selectedSort(newValue) {
  //     if (typeof this.posts[0][newValue] === 'string') {
  //       this.posts.sort((post1, post2) => {
  //         return post1[newValue]?.localeCompare(post2[newValue]);
  //       });
  //       console.log(newValue);
  //       console.log(this.posts);
  //       console.log(typeof this.posts[0][newValue]);
  //     } else {
  //       this.posts.sort((post1, post2) => {
  //         return post1.id - post2.id;
  //       });
  //       console.log(this.posts);
  //     }
  //   },
  //   dialogVisible(newValue) {
  //     console.log(newValue);
  //   },
  // },
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

h1 {
  text-align: center;
  margin-bottom: 5px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
