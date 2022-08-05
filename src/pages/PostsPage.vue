<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск по теме..."
      class="search"
    />
    <div class="app__btns">
      <my-select v-model="selectedSort" :options="sortOptions" />
      <my-button @click="showDialog">Создать пост</my-button>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      @fetchPosts="fetchPosts"
      v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- <my-pages :page="page" :totalPages="totalPages" @changePage="changePage" /> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
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
      searchQuery: '',
      page: 1,
      limit: 7,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
        { value: 'id', name: 'По ID поста' },
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
            'https://jsonplaceholder.typicode.com/posts',
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers['x-total-count'] / this.limit
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

    async fetchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers['x-total-count'] / this.limit
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

    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
        console.log(response);
      } catch (error) {
        alert('Ошибка: ', error);
      } finally {
      }
    },

    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
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
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
  },
};
</script>

<style>
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

/* .observer {
  height: 30px;
  background: teal;
} */
</style>
