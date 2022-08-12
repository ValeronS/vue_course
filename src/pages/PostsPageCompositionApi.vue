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
      <my-button @click="dialogVisible">Создать пост</my-button>
    </div>

    <!-- <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog> -->

    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
    <div v-else>Идет загрузка...</div>

    <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';
import { ref } from 'vue';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
        { value: 'id', name: 'По ID поста' },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    };
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
</style>
